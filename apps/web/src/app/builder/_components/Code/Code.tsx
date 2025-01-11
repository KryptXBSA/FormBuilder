"use client";
import React from "react";
import { useAppState } from "@/state/state";
import { CodeHighlight } from "@/components/code-highlight";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeSteppers } from "./CodeSteppers";

export function Code() {
	const { currentForm } = useAppState();

	return (
		<div className="flex flex-col">
			<h3 className="scroll-m-20 font-semibold text-2xl tracking-tight">
				Prerequisites
			</h3>
			<p>First make sure you have </p>
			<CodeSteppers />
		</div>
	);
}
