"use client";

import React, { useState } from "react";
import initializeAppState from "@/hooks/initializeAppState";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormBuilder } from "@/core/FormBuilder";
import { FormList } from "@/app/builder/_components/FormList";
import { FormName } from "@/core/FormName";
import { Preview } from "@/app/builder/_components/Preview";

export default function IndexPage() {
	const [loaded, setLoaded] = useState(false);

	initializeAppState(loaded, setLoaded);

	if (!loaded)
		return (
			<div className="flex h-96 w-full flex-col items-center justify-center">
				<AiOutlineLoading3Quarters className="h-16 w-16 animate-spin text-blue-500" />
				<p>Loading...</p>
			</div>
		);

	return (
		<section className="mx-auto max-w-[1500px] py-10">
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
