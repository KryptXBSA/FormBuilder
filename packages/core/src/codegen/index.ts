import type { FormFramework, FormSchema } from "@/types";
import Handlebars from "handlebars";
import { generateImports } from "./imports/generateImports";
import {
	booleanInputTemplate,
	comboboxInputTemplate,
	dateInputTemplate,
	mainTemplate,
	numberInputTemplate,
	radioInputTemplate,
	selectInputTemplate,
	stringInputTemplate,
	textareaInputTemplate,
} from "./templates";
import { formToZodSchema } from "./utils";
import * as prettier from "prettier/standalone";
import * as parserTypeScript from "prettier/parser-typescript";
import * as prettierPluginEstree from "prettier/plugins/estree";

registerPartials();

Handlebars.registerHelper("ifEquals", function (arg1, arg2, options) {
	//@ts-ignore
	return arg1 === arg2 ? options.fn(this) : options.inverse(this);
});
Handlebars.registerHelper("ifNotEquals", function (arg1, arg2, options) {
	//@ts-ignore
	return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
});

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

const main = Handlebars.compile(mainTemplate);

export async function generateCode(framework: FormFramework, form: FormSchema) {
	// const zodFormSchema = formToZodSchema(form);
	// const mainCode = main({ ...form, zodFormSchema });

	let generatedCode = "";
	const imports = Handlebars.compile(generateImports(framework, form.fields))
	generatedCode += imports({ importAliasUtils: form.settings.importAliasUtils, importAliasComponents: form.settings.importAliasComponents, });

	const formattedCode = await prettier.format(generatedCode, {
		parser: "typescript",
		semi: true,
		singleQuote: false,
		tabWidth: 2,
		plugins: [parserTypeScript, prettierPluginEstree],
	});
	return formattedCode;
}

function registerPartials() {
	Handlebars.registerPartial("numberInput", numberInputTemplate);
	Handlebars.registerPartial("dateInput", dateInputTemplate);
	Handlebars.registerPartial("booleanInput", booleanInputTemplate);
	Handlebars.registerPartial("stringInput", stringInputTemplate);
	Handlebars.registerPartial("radioInput", radioInputTemplate);
	Handlebars.registerPartial("selectInput", selectInputTemplate);
	Handlebars.registerPartial("comboboxInput", comboboxInputTemplate);
	Handlebars.registerPartial("textareaInput", textareaInputTemplate);
}
