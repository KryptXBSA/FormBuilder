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
import { Icons } from "@/components/icons";
import { Eye } from "lucide-react";
import type { FormFramework, FormSchema } from "formbuilder-core";
import type { Template } from "@/app/templates/templates";
import Image from "next/image";

interface TemplateCardProps {
	template: Template;
	selectedFramework: FormFramework | null;
	onPreview: (template: Template) => void;
	onUseTemplate: (schema: FormSchema) => void;
}

// Minimal template card props for use in modals and compact displays
export interface MinimalTemplateCardProps {
	template: Template;
	framework: FormFramework;
	onSelect: (schema: FormSchema) => void;
}

const frameworks = [
	{ id: "next", name: "Next.js", icon: Icons.next },
	{ id: "svelte", name: "Svelte", icon: Icons.Svelte },
	{ id: "vue", name: "Vue", icon: Icons.vue },
];

// Minimized version of the template card for use in the NewFormModal
export function MinimalTemplateCard({
	template,
	framework,
	onSelect,
}: MinimalTemplateCardProps) {
	// Only show template if it supports the selected framework
	if (!template.frameworks.includes(framework)) {
		return null;
	}

	const schema = template.formSchema[framework];
	if (!schema) {
		return null;
	}

	return (
		<Card
			className="cursor-pointer overflow-hidden hover:border-primary"
			onClick={() => onSelect(schema)}
		>
			<div className="relative h-28 w-full">
				<Image
					src={template.image}
					alt={template.title}
					fill
					className="object-cover"
				/>
				<div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-2">
					<span className="font-medium text-sm text-white">
						{template.title}
					</span>
				</div>
			</div>
			<CardContent className="p-2">
				<div className="flex items-center justify-between">
					<span className="text-muted-foreground text-xs">
						{template.fieldCount}{" "}
						{template.fieldCount === 1 ? "Field" : "Fields"}
					</span>
					<Badge variant="outline" className="px-1.5 py-0 text-xs">
						{template.category}
					</Badge>
				</div>
			</CardContent>
		</Card>
	);
}

export function TemplateCard({
	template,
	selectedFramework,
	onPreview,
	onUseTemplate,
}: TemplateCardProps) {
	return (
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
				<Button variant="outline" onClick={() => onPreview(template)}>
					<Eye /> Preview
				</Button>
				<Button
					onClick={() => {
						const framework = selectedFramework || template.frameworks[0];
						const schema = template.formSchema[framework];
						if (schema) {
							onUseTemplate(schema);
						}
					}}
				>
					Use Template
				</Button>
			</CardFooter>
		</Card>
	);
}
