import type { FormFramework, FormSchema } from "@/types";
import Handlebars from "handlebars";
import { generateImports } from "./imports/generateImports";
import { formToZodSchema } from "./utils";
import * as prettier from "prettier/standalone";
import * as parserTypeScript from "prettier/parser-typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";
import { COMPONENTS } from "../components/components";
import { mainNextTemplate } from "./templates/next/main";
import { mainVueTemplate } from "./templates/vue/main";
import { mainSvelteTemplate } from "./templates/svelte/main";
import type { FormField } from "@/types/field";

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
	//@ts-ignore
	return arg1 === arg2 ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper("ifNotEquals", function (arg1, arg2, options) {
	//@ts-ignore
	return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper("times", (n, block) => {
	let accum = "";
	for (let i = 0; i < n; ++i) accum += block.fn(i);
	return accum;
});

// TODO: fix default values at form declaration main template
//  defaultValues: {{{defaultValues fields}}},
Handlebars.registerHelper("defaultValues", (fields) => {
	let output = "{\n";
	for (const field of fields) {
		if (field.kind === "string") {
			output += `${field.key}: "${field.defaultValue || ""}",\n`;
		} else if (field.kind === "number") {
			output += `${field.key}: ${field.defaultValue || 1},\n`;
		}
	}
	output += "}";
	return new Handlebars.SafeString(output);
});
// DoubleBracesOpen
Handlebars.registerHelper("DBO", () => "{{");
// DoubleBracesClose
Handlebars.registerHelper("DBC", () => "}}");

// biome-ignore lint/complexity/useArrowFunction: <explanation>
Handlebars.registerHelper("lookupComponent", function (field) {
	const componentKey = `${field.variant}`;

	if (!COMPONENTS[componentKey]) {
		console.warn(`No component found for: ${componentKey}`);
		return "";
	}
	let templateText = COMPONENTS[componentKey].template;
	const entities: Record<string, string> = {
		"&#123;": "{",
		"&#125;": "}",
		"&#96;": "`",
		"&#36;": "$",
		"&quot;": '"',
		"&apos;": "'",
		"&lt;": "<",
		"&gt;": ">",
		"&amp;": "&",
	};

	templateText = templateText.replace(
		/(&[#\w]+;)/g,
		(entity) => entities[entity] || entity,
	);

	const template = Handlebars.compile(templateText);
	return new Handlebars.SafeString(template(field));
});

export type CodegenResult = {
	code: string;
	loc: number;
	schema: string;
};

export async function generateCode(
	framework: FormFramework,
	form: FormSchema,
): Promise<CodegenResult> {
	const zodFormSchema = formToZodSchema(form);
	let formSchema = "";
	if (framework === "next") {
		formSchema = `const formSchema = ${zodFormSchema}`;
		// TODO: fix schemas
	} else if (framework === "vue") {
		formSchema = `const formSchema = toTypedSchema(${zodFormSchema})`;
	} else if (framework === "svelte") {
		formSchema = `const formSchema = ${zodFormSchema}`;
	}

	const main = Handlebars.compile(
		framework === "vue"
			? mainVueTemplate
			: framework === "svelte"
				? mainSvelteTemplate
				: mainNextTemplate,
	);
	const flattedFields = form.fields.flatMap((group) => [
		{ variant: `${framework}-divider-start`, rowLength: group.length },
		...group,
		{ variant: `${framework}-divider-end` },
	]);
	const formTemplateCode = main({
		...form,
		fields: flattedFields,
		hasDateFields: hasDateFields(flattedFields as FormField<"svelte">[]),
	});

	function hasDateFields(fields: FormField<"svelte">[]): boolean {
		return fields.some((field) => field.variant === "svelte-shadcn-date-date");
	}
	const importsTemplate = Handlebars.compile(
		generateImports(framework, form.fields),
	);

	const importsCode = importsTemplate({
		importAliasUtils: form.settings.importAliasUtils,
		importAliasComponents: form.settings.importAliasComponents,
	});

	const formattedImports = await formatCode(importsCode);
	const formattedFormSchema = await formatCode(formSchema);
	const completeCode =
		framework === "svelte"
			? `<script lang="ts">\n${formattedImports}\n${formTemplateCode}`
			: formattedImports + formattedFormSchema + formTemplateCode;

	// couldn't find a vue parser
	if (framework === "vue") {
		const vueCode = `<script setup lang="ts">\n${completeCode}`;
		return {
			code: vueCode,
			loc: vueCode.split("\n").length,
			schema: formattedFormSchema,
		};
	}
	// couldn't find a svelte parser
	if (framework === "svelte") {
		const svelteCode = completeCode;
		return {
			code: svelteCode,
			loc: svelteCode.split("\n").length,
			schema: formattedFormSchema,
		};
	}

	const formattedCode = await formatCode(completeCode);
	return {
		code: formattedCode,
		loc: formattedCode.split("\n").length,
		schema: formattedFormSchema,
	};
}

async function formatCode(code: string) {
	return await prettier.format(code, {
		parser: "typescript",
		semi: true,
		singleQuote: false,
		tabWidth: 2,
		// @ts-ignore
		plugins: [parserTypeScript, prettierPluginEstree],
	});
}
