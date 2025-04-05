import type { Metadata } from "next";
import { TemplatesPage } from "./TemplatesPage";

export const metadata: Metadata = {
	title: "Templates",
	description:
		"Browse and select from a variety of pre-designed form templates to kickstart your project",
	openGraph: {
		title: "Form Templates | FormBuilder",
		description:
			"Browse our collection of beautiful, ready-to-use form templates for your Next.js, Vue, or Svelte project",
		type: "website",
		images: [
			{
				url: "/images/templates-og.jpg",
				width: 1200,
				height: 630,
				alt: "FormBuilder Templates",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Form Templates | FormBuilder",
		description:
			"Browse our collection of beautiful, ready-to-use form templates for your project",
		images: ["/images/templates-og.jpg"],
	},
};

export default function Page() {
	return <TemplatesPage />;
}
