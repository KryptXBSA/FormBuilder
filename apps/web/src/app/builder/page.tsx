"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormList } from "@/core/FormList";
import { Preview } from "@/app/builder/_components/Preview";
import { SortableGrid } from "./_components/SortableGrid";
import { AddField } from "./_components/AddField";
import { SettingsToggle } from "./_components/FormSettings/SettingsToggle";
import FormSettings from "./_components/FormSettings";
import { allFieldKinds } from "formbuilder-core";
import { useAppState } from "@/state/state";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import initializeAppState from "@/hooks/initializeAppState";
import { Code } from "./_components/Code";
import { FieldSettings } from "./_components/FieldSettings";

export default function Builder() {
	const [loaded, setLoaded] = useState(false);
	initializeAppState(loaded, setLoaded);

	const state = useAppState();

	const fields = allFieldKinds[state.currentForm.framework].map((v) => ({
		label: v.charAt(0).toUpperCase() + v.slice(1),
		kind: v,
	}));
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
					<TabsList className="ml-24 grid w-1/2 grid-cols-3">
						<TabsTrigger value="editor">Editor</TabsTrigger>
						<TabsTrigger value="preview">Preview</TabsTrigger>
						<TabsTrigger value="code">Code</TabsTrigger>
					</TabsList>
					<TabsContent className="" value="editor">
						<SettingsToggle
							onClick={() =>
								state.setAppState({
									showSettings: state.showSettings === "form" ? null : "form",
								})
							}
						/>
						{state.showSettings === "form" ? (
							<FormSettings />
						) : state.showSettings ? (
							<FieldSettings />
						) : (
							<SortableGrid />
						)}
					</TabsContent>
					<TabsContent value="preview">
						<Preview />
					</TabsContent>
					<TabsContent value="code">
						<Code />
					</TabsContent>
				</Tabs>
				<AddField fields={fields} />
			</div>
		</section>
	);
}
