"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Icons for frameworks
import { SiSvelte, SiNextdotjs, SiVuedotjs } from "react-icons/si";
import { Icons } from "@/components/icons";

// Define types
type Framework = {
	id: string;
	name: string;
	icon: React.ElementType;
};

type Template = {
	id: string;
	title: string;
	description: string;
	image: string;
	category: string;
	frameworks: string[];
	fieldCount: number;
};

// Sample template data
const templates: Template[] = [
	{
		id: "contact-form",
		title: "Contact Form",
		description: "A simple contact form with name, email, and message fields.",
		image: "/templates/prev1.png",
		category: "Basic",
		frameworks: ["next", "vue"],
		fieldCount: 3,
	},
	{
		id: "survey",
		title: "Customer Survey",
		description:
			"Collect feedback from your customers with this comprehensive survey template.",
		image: "/templates/prev1.png",
		category: "Business",
		frameworks: ["next", "svelte", "vue"],
		fieldCount: 8,
	},
	{
		id: "event-registration",
		title: "Event Registration",
		description:
			"Allow users to register for your events with this registration form.",
		image: "/templates/prev1.png",
		category: "Events",
		frameworks: ["next"],
		fieldCount: 5,
	},
	{
		id: "job-application",
		title: "Job Application",
		description:
			"A complete job application form with personal details, experience, and file uploads.",
		image: "/templates/prev1.png",
		category: "Business",
		frameworks: ["next", "svelte"],
		fieldCount: 12,
	},
	{
		id: "newsletter-signup",
		title: "Newsletter Signup",
		description:
			"A simple form to collect email addresses for your newsletter.",
		image: "/templates/prev1.png",
		category: "Marketing",
		frameworks: ["vue", "svelte"],
		fieldCount: 2,
	},
	{
		id: "feedback",
		title: "Feedback Form",
		description: "Collect user feedback about your product or service.",
		image: "/templates/prev1.png",
		category: "Basic",
		frameworks: ["next", "vue", "svelte"],
		fieldCount: 4,
	},
];

// Filter options for templates
const categories: string[] = [
	"All",
	"Basic",
	"Business",
	"Events",
	"Marketing",
];
const frameworks: Framework[] = [
	{ id: "next", name: "Next.js", icon: Icons.next },
	{ id: "svelte", name: "Svelte", icon: Icons.Svelte },
	{ id: "vue", name: "Vue", icon: Icons.vue },
];

// PageHeader component
interface PageHeaderProps {
	heading: string;
	subheading?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading, subheading }) => {
	return (
		<div className="mb-6">
			<h2 className="font-bold text-2xl tracking-tight">{heading}</h2>
			{subheading && (
				<p className="mt-1 text-muted-foreground text-sm">{subheading}</p>
			)}
		</div>
	);
};

export default function TemplatesPage() {
	// State for selected category and framework
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const [selectedFramework, setSelectedFramework] = useState<string | null>(
		null,
	);

	// Filter templates based on selected category and framework
	const filteredTemplates = templates.filter((template) => {
		const categoryMatch =
			selectedCategory === "All" || template.category === selectedCategory;
		const frameworkMatch =
			!selectedFramework || template.frameworks.includes(selectedFramework);
		return categoryMatch && frameworkMatch;
	});

	return (
		<div className="container mx-auto py-6">
			<PageHeader
				heading="Form Templates"
				subheading="Choose a template to get started or create a form from scratch."
			/>

			<div className="mb-6">
				<div className="flex items-end gap-2">
					{/* Filter sections */}
					<div className="flex flex-wrap items-center gap-2">
						<div>
							<h3 className="mb-2 font-medium text-sm">Categories</h3>
							{categories.map((category) => (
								<Button
									key={category}
									variant={
										selectedCategory === category ? "default" : "outline"
									}
									size="sm"
									className="rounded-full"
									onClick={() => setSelectedCategory(category)}
								>
									{category}
								</Button>
							))}
						</div>
					</div>
					<div className="h-9 w-0.5 bg-border" />

					<div>
						<h3 className="mb-2 font-medium text-sm">Frameworks</h3>
						<div className="flex flex-wrap items-center gap-2">
							{frameworks.map((framework) => {
								const Icon = framework.icon;
								return (
									<Button
										key={framework.id}
										variant={
											selectedFramework === framework.id ? "default" : "outline"
										}
										size="sm"
										className="flex items-center gap-1.5 rounded-full"
										onClick={() =>
											setSelectedFramework(
												selectedFramework === framework.id
													? null
													: framework.id,
											)
										}
									>
										<Icon className="h-4 w-4" />
										{framework.name}
									</Button>
								);
							})}
						</div>
					</div>
					{(selectedCategory !== "All" || selectedFramework) && (
						<Button
							variant="ghost"
							size="sm"
							className="ml-auto"
							onClick={() => {
								setSelectedCategory("All");
								setSelectedFramework(null);
							}}
						>
							Clear Filters
						</Button>
					)}
				</div>

				{filteredTemplates.length > 0 ? (
					<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filteredTemplates.map((template) => (
							<Card key={template.id} className="overflow-hidden">
								<div className="relative flex h-48 w-full items-center justify-center bg-slate-100">
									{/* Placeholder for template preview image */}
									<div className="text-slate-400">Template Preview</div>
									{/* Uncomment when images are available */}
									<Image
										src={template.image}
										alt={template.title}
										fill
										className="object-cover"
									/>
								</div>
								<CardHeader>
									<div className="flex items-start justify-between">
										<div>
											<CardTitle>{template.title}</CardTitle>
											<CardDescription className="mt-2">
												{template.description}
											</CardDescription>
										</div>
										<span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 font-medium text-blue-800 text-xs">
											{template.category}
										</span>
									</div>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{template.frameworks.map((fw) => {
											const framework = frameworks.find((f) => f.id === fw);
											const Icon = framework?.icon;
											return (
												<Badge
													key={fw}
													variant="outline"
													className="flex items-center gap-1"
												>
													{Icon && <Icon className="h-3 w-3" />}
													{framework?.name}
												</Badge>
											);
										})}
										<div className="ml-auto flex items-center text-muted-foreground">
											{template.fieldCount}{" "}
											{template.fieldCount === 1 ? "Field" : "Fields"}
										</div>
									</div>
								</CardContent>
								<CardFooter className="flex justify-between">
									<Button variant="outline">Preview</Button>
									<Link
										href={`/builder?template=${template.id}&framework=${template.frameworks[0]}`}
									>
										<Button>Use Template</Button>
									</Link>
								</CardFooter>
							</Card>
						))}
					</div>
				) : (
					<div className="py-12 text-center">
						<p className="text-muted-foreground">
							No templates match your filters.
						</p>
						<Button
							variant="outline"
							className="mt-4"
							onClick={() => {
								setSelectedCategory("All");
								setSelectedFramework(null);
							}}
						>
							Clear Filters
						</Button>
					</div>
				)}
			</div>
			<div className="mt-12 space-y-4 text-center">
				<p className="text-slate-500">Don't see what you're looking for?</p>
				<div className="flex justify-center space-x-4">
					<Link href="/builder">
						<Button size="lg">Create Custom Form</Button>
					</Link>
					{/* TODO: FIX LINK */}
					<Link
						href="https://github.com/your-repo/your-project/issues/new"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button size="lg" variant="outline">
							Request a Template
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
