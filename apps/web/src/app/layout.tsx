import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/shared/Toaster";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export const metadata: Metadata = {
	openGraph: { images: "/demo.png" },

	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/logo.svg",
		shortcut: "/logo.svg",
		apple: "/apple-touch-icon.png",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased",
						fontSans.variable,
					)}
				>
					<ThemeProvider attribute="class" defaultTheme="dark">
						<div className="relative flex min-h-screen flex-col">
							<SiteHeader />
							<div className="flex-1">{children}</div>
							<Toaster />
						</div>
						<TailwindIndicator />
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
