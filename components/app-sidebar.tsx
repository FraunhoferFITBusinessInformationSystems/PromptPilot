"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from 'next/image'
import { Home, List } from "lucide-react";

// Menu items.
const items = [
	{
		title: "Survey",
		url: "/survey",
		icon: List,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader className="m-2 h-24 items-center justify-center">
				<br />
				<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-fim shadow-lg rounded-lg">
					<div className="flex h-14 justify-center items-center">
						<Link href="/" className="mr-6 flex space-x-8">
						<Image
							src="/FIM_Logo.png"
							width={100}
							height={100}
							alt="FIM Logo"
							style={{ width: '50px', height: 'auto' }}
						/></Link>
					</div>
				</header>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Menu</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url} key={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
