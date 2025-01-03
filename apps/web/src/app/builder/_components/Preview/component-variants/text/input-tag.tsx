import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { type Tag, TagInput } from "emblor";
import type { FormFramework, TextField } from "formbuilder-core";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const tags = [
	{
		id: "1",
		text: "Sport",
	},
	{
		id: "2",
		text: "Coding",
	},
	{
		id: "3",
		text: "Travel",
	},
];

export function InputTag({ f }: { f: TextField<FormFramework> }) {
	const form = useFormContext<any>();
	const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
	const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<div className="space-y-2">
							<TagInput
								{...field}
								id="input-56"
								tags={exampleTags}
								setTags={(newTags) => {
									setExampleTags(newTags);
								}}
								placeholder="Add a tag"
								styleClasses={{
									tagList: {
										container: "gap-1",
									},
									input:
										"rounded-lg transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20",
									tag: {
										body: "relative h-7 bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
										closeButton:
											"absolute -inset-y-px -end-px p-0 rounded-s-none rounded-e-lg flex size-7 transition-colors outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 text-muted-foreground/80 hover:text-foreground",
									},
								}}
								activeTagIndex={activeTagIndex}
								setActiveTagIndex={setActiveTagIndex}
								inputFieldPosition="bottom"
							/>
						</div>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
