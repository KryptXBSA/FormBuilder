"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import type { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

interface MainNavProps {
	items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
	const pathname = usePathname();
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				<Icons.logo className="h-6 w-6" />
				<span className="inline-block font-bold">{siteConfig.name}</span>
			</Link>
			{[
				{ href: "/builder", label: "Builder" },
				{ href: "/templates", label: "Templates" },
			].map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn(
						"transition-colors hover:text-foreground/90",
						pathname === item.href
							? "font-semibold text-foreground"
							: "text-foreground/80",
					)}
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}
