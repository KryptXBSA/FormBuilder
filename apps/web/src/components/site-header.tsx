"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Skeleton } from "./ui/skeleton";

export function SiteHeader() {
	const [stars, setStars] = useState<number | null>(null);

	useEffect(() => {
		fetch("https://api.github.com/repos/kryptxbsa/formbuilder")
			.then((res) => res.json())
			.then((data) => {
				if (data.stargazers_count) {
					setStars(data.stargazers_count);
				}
			})
			.catch((error) => {
				console.error("Error fetching GitHub stars:", error);
			});
	}, []);

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-2">
						{/* <Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link> */}

						<Link
							href="https://kryptxbsa.com/support"
							target="_blank"
							rel="noreferrer"
							className="relative group"
						>
							<div className="-inset-[1px] absolute animate-gradient-xy rounded-md bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200" />
							<div
								className={buttonVariants({
									variant: "outline",
									size: "sm",
									className: "relative rounded-full hover:bg-background",
								})}
							>
								Support
							</div>
						</Link>
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({
								variant: "outline",
								size: "sm",
								className: "rounded-full",
							})}
						>
							<Icons.gitHub className="mr-1 h-4 w-4" />
							{stars ? stars : <Skeleton className="h-4 w-7" />}
						</Link>
						<Link
							href={siteConfig.links.twitter}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className={buttonVariants({
									size: "icon",
									variant: "ghost",
								})}
							>
								<Icons.twitter className="h-5 w-5 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>

						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
