import type { FormSchema } from "@/schema";
import Handlebars from "handlebars";

import { generateImports } from "./imports/index";
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

export function generateCode(form: FormSchema) {
	const zodFormSchema = formToZodSchema(form);
	const mainCode = main({ ...form, zodFormSchema });

	// console.log("ff", form, "main", mainCode);
	const generatedCode = generateImports(form.fields) + mainCode;
	return generatedCode;
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
