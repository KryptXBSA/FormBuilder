"use client";
import { KanbanBoard } from "./_components/KanbanBoard";

import React, { useState } from "react";
import initializeAppState from "@/hooks/initializeAppState";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormBuilder } from "@/core/FormBuilder";
import { FormList } from "@/core/FormList";
import { FormName } from "@/core/FormName";
import { Preview } from "@/core/Preview";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/state/state";
export default function Builder() {
	const { selectedForm} = useAppState();
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
					<TabsContent className="flex w-full flex-row" value="editor">
						<KanbanBoard />
					</TabsContent>
					<TabsContent value="preview">
						<Preview />
					</TabsContent>
					<TabsContent value="code">
						<Preview />
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
