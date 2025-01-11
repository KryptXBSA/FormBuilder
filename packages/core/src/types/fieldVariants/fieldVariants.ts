import type { FormFramework } from "..";
import { astroFieldVariants } from "./astroVariant";
import { nextFieldVariants } from "./nextVariant";
import { reactFieldVariants } from "./reactVariant";
import { solidFieldVariants } from "./solidVariant";
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

export const reactFieldKinds = [
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
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export const solidFieldKinds = [
	"heading",
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export const astroFieldKinds = [
	"heading",
	"text",
	"number",
	"boolean",
	"date",
	// "file",
	"enum",
] as const;

export type Kind = FrameworkFieldKinds[FormFramework];

// export const allFieldVariantsWithKinds = {
//     next: Object.fromEntries(nextFieldKinds.map(kind => [
//         kind, nextFieldVariants[kind],
//     ])),
//     react: Object.fromEntries(reactFieldKinds.map(kind => [
//         kind, reactFieldVariants[kind],
//     ])),
//     vue: Object.fromEntries(vueFieldKinds.map(kind => [
//         kind, vueFieldVariants[kind]

//     ])),
//     svelte: Object.fromEntries(svelteFieldKinds.map(kind => [
//         kind, svelteFieldVariants[kind]
//     ])),
//     solid: Object.fromEntries(solidFieldKinds.map(kind => [
//         kind, solidFieldVariants[kind]
//     ])),
//     astro: Object.fromEntries(astroFieldKinds.map(kind => [
//         kind, astroFieldVariants[kind]

//     ])),
// } as const;

export const allFieldVariantsByKind = {
	heading: [
		...nextFieldVariants.heading,
		...reactFieldVariants.heading,
		...vueFieldVariants.heading,
		...svelteFieldVariants.heading,
		...solidFieldVariants.heading,
		...astroFieldVariants.heading,
	],
	text: [
		...nextFieldVariants.text,
		...reactFieldVariants.text,
		...vueFieldVariants.text,
		...svelteFieldVariants.text,
		...solidFieldVariants.text,
		...astroFieldVariants.text,
	],
	number: [
		...nextFieldVariants.number,
		...reactFieldVariants.number,
		...vueFieldVariants.number,
		...svelteFieldVariants.number,
		...solidFieldVariants.number,
		...astroFieldVariants.number,
	],
	boolean: [
		...nextFieldVariants.boolean,
		...reactFieldVariants.boolean,
		...vueFieldVariants.boolean,
		...svelteFieldVariants.boolean,
		...solidFieldVariants.boolean,
		...astroFieldVariants.boolean,
	],
	date: [
		...nextFieldVariants.date,
		...reactFieldVariants.date,
		...vueFieldVariants.date,
		...svelteFieldVariants.date,
		...solidFieldVariants.date,
		...astroFieldVariants.date,
	],
	// file: [
	//     ...nextFieldVariants.file,
	//     ...reactFieldVariants.file,
	//     ...vueFieldVariants.file,
	//     ...svelteFieldVariants.file,
	//     ...solidFieldVariants.file,
	//     ...astroFieldVariants.file,
	// ],
	enum: [
		...nextFieldVariants.enum,
		...reactFieldVariants.enum,
		...vueFieldVariants.enum,
		...svelteFieldVariants.enum,
		...solidFieldVariants.enum,
		...astroFieldVariants.enum,
	],
} as const;

export const allFieldVariants = {
	next: nextFieldVariants,
	react: reactFieldVariants,
	vue: vueFieldVariants,
	svelte: svelteFieldVariants,
	solid: solidFieldVariants,
	astro: astroFieldVariants,
} as const;

export const allFieldKinds = {
	next: nextFieldKinds,
	react: reactFieldKinds,
	vue: vueFieldKinds,
	svelte: svelteFieldKinds,
	solid: solidFieldKinds,
	astro: astroFieldKinds,
} as const;

export type FrameworkFieldKinds = {
	next: (typeof nextFieldKinds)[number];
	react: (typeof reactFieldKinds)[number];
	vue: (typeof vueFieldKinds)[number];
	svelte: (typeof svelteFieldKinds)[number];
	solid: (typeof solidFieldKinds)[number];
	astro: (typeof astroFieldKinds)[number];
};

export type FrameworkFieldVariants = {
	next: (typeof nextFieldVariants)[keyof typeof nextFieldVariants][number]["value"];
	react: (typeof reactFieldVariants)[keyof typeof reactFieldVariants][number]["value"];
	vue: (typeof vueFieldVariants)[keyof typeof vueFieldVariants][number]["value"];
	svelte: (typeof svelteFieldVariants)[keyof typeof svelteFieldVariants][number]["value"];
	solid: (typeof solidFieldVariants)[keyof typeof solidFieldVariants][number]["value"];
	astro: (typeof astroFieldVariants)[keyof typeof astroFieldVariants][number]["value"];
};
