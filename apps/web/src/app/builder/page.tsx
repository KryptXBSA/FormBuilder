"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Preview } from "@/app/builder/_components/Preview";
import { SortableGrid } from "./_components/SortableGrid";
import { AddField } from "./_components/AddField";
import { SettingsToggle } from "./_components/FormSettings/SettingsToggle";
import FormSettings from "./_components/FormSettings";
import { allFieldKinds } from "formbuilder-core";
import { type BuilderContent, useAppState } from "@/state/state";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import initializeAppState from "@/hooks/initializeAppState";
import { Code } from "./_components/Code";
import { FieldSettings } from "./_components/FieldSettings";
import { FormList } from "./_components/FormList";
import { Code2, Eye, Pen, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Builder() {
	const [loaded, setLoaded] = useState(false);
	initializeAppState(loaded, setLoaded);

	const state = useAppState();

	const fields = allFieldKinds[state.currentForm.framework].map((v) => ({
		label: v.charAt(0).toUpperCase() + v.slice(1),
		kind: v,
	}));

	function handleTabChange(value: BuilderContent) {
		state.setAppState({
			builderContent: value,
		});
	}

	if (!loaded)
		return (
			<div className="flex h-96 w-full flex-col items-center justify-center">
				<AiOutlineLoading3Quarters className="h-16 w-16 animate-spin text-blue-500" />
				<p>Loading...</p>
			</div>
		);

	return (
		<section className="mx-auto h-screen max-w-[1500px] bg-[#1D1E2B]">
			<div className="flex w-full justify-center pt-4">
				<FormList />
				<div defaultValue="editor" className="max-w[1000px] w-full bg-[#1D1E2B]">
					<SettingsToggle
						onClick={() =>
							state.setAppState({
								builderContent:
									state.builderContent === "formSettings"
										? null
										: "formSettings",
							})
						}
					/>
					<div className="flex justify-center bg-background">
						<div
							style={{ borderRadius: "0px 0px 10px 10px" }}
							className="flex w-fit justify-center gap-2 bg-[#1D1E2B] p-2"
						>
							<Button
								variant={
									state.builderContent === "editor" ? "default" : "outline"
								}
								className="flex gap-2 p-3"
								onClick={() => handleTabChange("editor")}
							>
								<Pencil /> <span>Editor</span>
							</Button>
							<Button
								variant={
									state.builderContent === "preview" ? "default" : "outline"
								}
								className="flex gap-2 p-3"
								onClick={() => handleTabChange("preview")}
							>
								<Eye /> <span>Preview</span>
							</Button>
							<Button
								variant={
									state.builderContent === "code" ? "default" : "outline"
								}
								className="flex gap-2 p-3"
								onClick={() => handleTabChange("code")}
							>
								<Code2 /> <span>Code</span>
							</Button>
						</div>
					</div>
					<div className="bg-background p-6">
						{state.builderContent === "formSettings" ? (
							<FormSettings />
						) : state.builderContent === "preview" ? (
							<Preview />
						) : state.builderContent === "code" ? (
							<Code />
						) : state.builderContent === "fieldSettings" ? (
							<FieldSettings />
						) : state.builderContent === "editor" ? (
							<SortableGrid />
						) : (
							<SortableGrid />
						)}
					</div>
				</div>
				<AddField fields={fields} />
			</div>
		</section>
	);
}
