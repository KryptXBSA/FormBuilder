import type { Metadata } from "next";
import { BuilderPage } from "./BuilderPage";

export const metadata: Metadata = {
  title: "Builder",
  description:
    "Create beautiful, type-safe forms with our drag-and-drop form builder for Next.js, Vue, and Svelte",
  openGraph: {
    title: "Form Builder | Create Custom Forms",
    description:
      "Design and build custom forms with our intuitive drag-and-drop form builder. Export to your favorite framework.",
    type: "website",
    images: [
      {
        url: "/images/builder-og.jpg", 
        width: 1200,
        height: 630,
        alt: "FormBuilder Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Form Builder | Create Custom Forms",
    description:
      "Design and build custom forms with our intuitive drag-and-drop interface",
    images: ["/images/builder-og.jpg"], 
  },
};

export default function Page() {
  return <BuilderPage />;
}