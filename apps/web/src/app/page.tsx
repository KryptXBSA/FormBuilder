import type { Metadata } from "next";
import { IndexPage } from "./IndexPage";

export const metadata: Metadata = {
	title: "FormBuilder | Build Type-Safe Forms for Next.js, Vue, and Svelte",
	description:
		"Create beautiful, type-safe forms with our drag-and-drop form builder. Export directly to Next.js, Vue, or Svelte.",
	keywords: [
		"form builder",
		"react forms",
		"next.js forms",
		"vue forms",
		"svelte forms",
		"type-safe forms",
		"drag and drop forms",
	],
	openGraph: {
		title: "FormBuilder | Build Type-Safe Forms for Next.js, Vue, and Svelte",
		description:
			"Create beautiful, type-safe forms with our intuitive drag-and-drop form builder in minutes, not hours.",
		type: "website",
		url: "https://formbuilder.app",
		siteName: "FormBuilder",
		images: [
			{
				url: "/images/formbuilder-og.jpg",
				width: 1200,
				height: 630,
				alt: "FormBuilder - Build Type-Safe Forms",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "FormBuilder | Build Type-Safe Forms for Next.js, Vue, and Svelte",
		description:
			"Create beautiful, type-safe forms with our intuitive drag-and-drop form builder in minutes, not hours.",
		images: ["/images/formbuilder-og.jpg"],
		creator: "@formbuilder",
	},
	alternates: {
		canonical: "https://formbuilder.app",
	},
};

export default function Page() {
	return <IndexPage />;
}
