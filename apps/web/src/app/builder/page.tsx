"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormList } from "@/core/FormList";
import { Preview } from "@/core/Preview";
import { SortableGrid } from "./_components/SortableGrid";
import { NewField } from "./_components/NewField";
export default function Builder() {
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
						<SortableGrid />
					</TabsContent>
					<TabsContent value="preview">
						<Preview />
					</TabsContent>
					<TabsContent value="code">
						<Preview />
					</TabsContent>
				</Tabs>

				<div className="mt-10 flex flex-col">
					<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
						Add new fields
					</h3>
					<div className="flex flex-col gap-4">
						<NewField text="432" />
						<NewField text="123" />
						<NewField text="22" />
					</div>
				</div>
			</div>
		</section>
	);
}
