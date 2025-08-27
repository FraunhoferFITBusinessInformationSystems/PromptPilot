import type { Metadata } from "next";
import "./globals.css";
import BreadCrumb from "@/components/breadcrumb";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const defaultUrl = process.env.DEPLOY_URL
	? `https://${process.env.DEPLOY_URL}`
	: "http://localhost:3000";

export const metadata: Metadata = {
	title: "Prompt Assistant Survey",
	description: "Reasearch Project",
	metadataBase: new URL(defaultUrl),
};

export default async function RootLayout({
	children,
	...props
}: Readonly<{
	children: React.ReactNode;
	searchParams?: {
		PROLIFIC_PID?: string;
	};
}>) {
	const searchParams = await props.searchParams;
	let prolific_pid = "";
	if (searchParams?.PROLIFIC_PID) {
		prolific_pid = searchParams.PROLIFIC_PID;
	}
	return (
		<html lang="en">
			<NuqsAdapter>
				<body className="min-h-screen bg-background font-sans antialiased">
					<div vaul-drawer-wrapper="">
						<div className="relative flex min-h-screen flex-col bg-background">
							<SidebarProvider>
								{/* <AppSidebar /> */}
								<main className="mx-auto w-full xl:w-5/6 p-2 md:p-8">
									<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white shadow rounded-lg">
										<div className="flex flex-row h-14 items-center">
											<div className="flex-none basis-10/12 flex items-center justify-start pl-2">
												{/* <SidebarTrigger className="h-6 w-6" variant={"ghost"} /> */}
												<div className="pl-4">
													<BreadCrumb />
												</div>
											</div>
											<div className="flex-auto basis-2/12 flex justify-end ">
												{/* <Link href="/" className="mr-7 flex space-x-8"> */}
												<span className="font-bold text-fim text-2xl">
													Prompt Assistant
												</span>
												{/* </Link> */}
											</div>
										</div>
									</header>
									{children}
								</main>
							</SidebarProvider>
						</div>
					</div>
					<Toaster />
				</body>
			</NuqsAdapter>
		</html>
	);
}
