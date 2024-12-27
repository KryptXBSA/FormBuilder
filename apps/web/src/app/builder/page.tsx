"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormList } from "@/core/FormList";
import { Preview } from "@/core/Preview";
import { SortableGrid } from "./_components/SortableGrid";
import { AddField } from "./_components/AddField";
import { SettingsToggle } from "./_components/FormSettings/SettingsToggle";
import SettingsForm from "./_components/FormSettings";
import { fieldKind } from "formbuilder-core";
export default function Builder() {
	const [showSettings, setShowSettings] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const fields = fieldKind.map((v) => ({
		label: v.charAt(0).toUpperCase() + v.slice(1),
		kind: v,
	}));

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
							showSettings={showSettings}
							setShowSettings={setShowSettings}
						/>
						{showSettings ? <SettingsForm /> : <SortableGrid />}
					</TabsContent>
					<TabsContent value="preview">
						<Preview />
					</TabsContent>
					<TabsContent value="code">
						<Preview />
					</TabsContent>
				</Tabs>
				<AddField fields={fields} />
			</div>
		</section>
	);
}
