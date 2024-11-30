"use client";

import React, { useState } from "react";
import initializeAppState from "@/hooks/initializeAppState";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormBuilder } from "@/core/FormBuilder";
import { FormList } from "@/core/FormList";
import { FormName } from "@/core/FormName";
import { Preview } from "@/core/Preview";
import NewVersionDialog from "./NewVersionDialog";

export default function IndexPage() {
	const [loaded, setLoaded] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	initializeAppState(setLoaded, setDialogOpen);

	if (!loaded)
		return (
			<div className="flex h-96 w-full flex-col items-center justify-center">
				<AiOutlineLoading3Quarters className="h-16 w-16 animate-spin text-blue-500" />
				<p>Loading...</p>
			</div>
		);

	return (
		<section className="mx-auto max-w-[1500px] py-10">
			<NewVersionDialog open={dialogOpen} setOpen={setDialogOpen} />
			<div className="flex w-full gap-6">
				<FormList />
				<Tabs defaultValue="editor" className="w-full">
					<FormName />
					<TabsList className="mx-auto grid w-1/2 grid-cols-2">
						<TabsTrigger value="editor">Editor</TabsTrigger>
						<TabsTrigger value="preview">Preview</TabsTrigger>
					</TabsList>
					<TabsContent className="w-full" value="editor">
						<FormBuilder />
					</TabsContent>
					<TabsContent value="preview">
						<Preview />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
