import type { FormFramework, FormSchema } from "@/types";
import { parseSchema } from "json-schema-to-zod";
import type { FormField } from "..";

export function formToZodSchema(form: FormSchema) {
	const jsonSchema = formToJsonSchema(form);
	const formSchema = jsonSchemaToZod(jsonSchema);
	return formSchema;
}

function jsonSchemaToZod(obj: any) {
	let schema = parseSchema(obj);
	const catchallPattern = /\.catchall\(z\.never\(\)\)/;
	schema = schema.replace(catchallPattern, "");
	schema = schema.replace(".number()", ".coerce.number()");
	schema = schema.replaceAll(".string().datetime({ offset: true })", ".date()");
	return schema;
}

function formToJsonSchema(form: FormSchema) {
	const definitions: { [key: string]: any } = {};
	const properties: { [key: string]: any } = {};
	const required: string[] = [];

	// TODO: handle optional and non optional fields
	form.fields.flat().forEach((field: FormField<FormFramework>) => {
		let property: any;
		if (field.variant === "next-originui-text-inputtag") {
			property = {
				type: "array",
				items: {
					type: "object",
					properties: {
						id: { type: "string" },
						text: { type: "string" },
					},
				},
			};
		} else if (field.kind === "text")
			property = {
				type: "string",
				minLength: field.validation?.min
					? Number.parseInt(field.validation?.min.toString())
					: 1,
				maxLength: field.validation?.max
					? Number.parseInt(field.validation?.max.toString())
					: 255,
			};
		else if (field.kind === "number") {
			// this may also be applicable to dual slider svelete?
			if (field.variant==="next-shadcn-number-slider")
				property = {
					type: "array",
					items: {
						type: "number",
					},
				};
			else if (field.variant.includes("dualslider"))
				property = {
					type: "array",
					items: {
						type: "number",
					},
				};
			else if (field.variant.includes("phone"))
				property = {
					type: "string",
					format: "phone",
				};
			else
				property = {
					type: field.kind,
					minimum: field.validation?.min,
					maximum: field.validation?.max,
				};
		} else if (field.kind === "boolean")
			property = {
				type: field.kind,
			};
		else if (field.kind === "date")
			if (field.variant === "next-shadcn-date-daterange")
				property = {
					type: "object",
					properties: {
						from: {
							type: "string",
							format: "date-time",
						},
						to: {
							type: "string",
							format: "date-time",
						},
					},
				};
			else
				property = {
					type: "string",
					format: "date-time",
				};
		else if (field.kind === "enum")
			property = {
				type: "string",
			};
		properties[field.key] = property;
		// if (field.required) {
		// 	required.push(field.key);
		// }
	});

	definitions.form = {
		type: "object",
		properties,
		required,
		additionalProperties: false,
		// description: "My neat object schema",
	};

	// const schema = {
	//   // $ref: `#/definitions/${form.id}`,
	//   definitions,
	//   $schema: "http://json-schema.org/draft-07/schema#",
	// }

	return definitions.form;
}
