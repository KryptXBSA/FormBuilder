// import { expect, test } from "bun:test";
// import { generateCode } from "../src/codegen";
// import { mockFields } from "../src/mock/mockFields";
// import {
// 	mainTemplate,
// 	stringInputTemplate,
// 	numberInputTemplate,
// 	booleanInputTemplate,
// 	dateInputTemplate,
// 	selectInputTemplate,
// 	radioInputTemplate,
// 	comboboxInputTemplate,
// 	textareaInputTemplate,
// } from "../src/codegen/templates";
// import type { FormSchema } from "@/types";

// test("test generate code", () => {
// 	const form: FormSchema = {
// 		name: "TestForm",
// 		fields: [
// 			{
// 				id: "1",
// 				label: "Name",
// 				key: "name",
// 				kind: "string",
// 				required: true,
// 			},
// 			{
// 				id: "2",
// 				label: "Age",
// 				key: "age",
// 				kind: "number",
// 				required: false,
// 			},
// 		],
// 	};
// 	const generatedCode = generateCode(form);
// 	expect(generatedCode).toBeDefined();
// });
