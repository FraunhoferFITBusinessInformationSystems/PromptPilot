"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const BreadCrumb = () => {
	const paths: string = usePathname();
	const pathNames: string[] = paths
		.split("/")
		.filter((name) => name !== null && name.trim() !== "");

	return (
		<Breadcrumb>
			<BreadcrumbList>

				<BreadcrumbSeparator />
				{pathNames.map((link: string, index: number) => {
					const href: string = `/${pathNames.slice(0, index + 1).join("/")}`;
					let LinkName: string = link[0].toUpperCase() + link.slice(1, link.length);
					const isUUID = (value: string) => {
						const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
						return uuidRegex.test(value);
					};
					isUUID(LinkName) ? LinkName="Details" : LinkName = LinkName
					const isLastPath: boolean = pathNames.length === index + 1;
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Fragment key={index}>
							<BreadcrumbItem>
								{!isLastPath ? (
									<BreadcrumbLink asChild>
										<Link href={href}>{LinkName}</Link>
									</BreadcrumbLink>
								) : (
									<BreadcrumbPage>{LinkName}</BreadcrumbPage>
								)}
							</BreadcrumbItem>
							{pathNames.length !== index + 1 && <BreadcrumbSeparator />}
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumb;
