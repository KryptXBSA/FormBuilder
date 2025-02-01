import type { FormFramework } from "..";
import { nextFieldVariants } from "./nextVariant";
import { svelteFieldVariants } from "./svelteVariant";
import { vueFieldVariants } from "./vueVariant";

export const nextFieldKinds = [
	"heading",
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export const vueFieldKinds = [
	"heading",
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export const svelteFieldKinds = [
	"heading",
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export type Kind = FrameworkFieldKinds[FormFramework];

export const allFieldVariantsByKind = {
	heading: [
		...nextFieldVariants.heading,
		...vueFieldVariants.heading,
		...svelteFieldVariants.heading,
	],
	text: [
		...nextFieldVariants.text,
		...vueFieldVariants.text,
		...svelteFieldVariants.text,
	],
	number: [
		...nextFieldVariants.number,
		...vueFieldVariants.number,
		...svelteFieldVariants.number,
	],
	boolean: [
		...nextFieldVariants.boolean,
		...vueFieldVariants.boolean,
		...svelteFieldVariants.boolean,
	],
	date: [
		...nextFieldVariants.date,
		...vueFieldVariants.date,
		...svelteFieldVariants.date,
	],
	// file: [
	//     ...nextFieldVariants.file,
	//     ...vueFieldVariants.file,
	//     ...svelteFieldVariants.file,
	// ],
	enum: [
		...nextFieldVariants.enum,
		...vueFieldVariants.enum,
		...svelteFieldVariants.enum,
	],
} as const;

export const allFieldVariants = {
	next: nextFieldVariants,
	vue: vueFieldVariants,
	svelte: svelteFieldVariants,
} as const;

export const allFieldKinds = {
	next: nextFieldKinds,
	vue: vueFieldKinds,
	svelte: svelteFieldKinds,
} as const;

export type FrameworkFieldKinds = {
	next: (typeof nextFieldKinds)[number];
	vue: (typeof vueFieldKinds)[number];
	svelte: (typeof svelteFieldKinds)[number];
};

export type FrameworkFieldVariants = {
	next: (typeof nextFieldVariants)[keyof typeof nextFieldVariants][number]["value"];
	vue: (typeof vueFieldVariants)[keyof typeof vueFieldVariants][number]["value"];
	svelte: (typeof svelteFieldVariants)[keyof typeof svelteFieldVariants][number]["value"];
};
