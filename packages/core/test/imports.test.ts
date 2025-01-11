import { describe, it, expect } from "bun:test";
import {
	generateImports,
	initialImports,
	textareaImport,
	switchImport,
	dateImport,
	selectImport,
	comboboxImport,
	radioImport,
} from "../src/codegen/imports/generateImports";
import type { FormField } from "../src/types";

describe("generateImports", () => {
	it("initial imports", () => {
		const fields: FormField[] = [];
		const result = generateImports(fields);
		expect(result).toContain(initialImports);
	});

	it("textarea imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Name",
				key: "name",
				kind: "textarea",
				required: true,
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(initialImports + textareaImport);
	});

	it("boolean imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Active",
				key: "active",
				kind: "boolean",
				required: true,
			},
		];
		const result = generateImports(fields);
		expect(result).toBe(initialImports + switchImport);
	});

	it("date imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Birthday",
				key: "birthday",
				kind: "date",
				required: true,
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(initialImports + dateImport);
	});

	it("enum select imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Category",
				key: "category",
				kind: "enum",
				style: "select",
				required: true,
				enumValues: [
					{ id: "1", label: "A", value: "a" },
					{ id: "2", label: "B", value: "b" },
				],
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(initialImports + selectImport);
	});

	it("enum combobox imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Category",
				key: "category",
				kind: "enum",
				style: "combobox",
				required: true,
				enumValues: [
					{ id: "1", label: "A", value: "a" },
					{ id: "2", label: "B", value: "b" },
				],
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(initialImports + comboboxImport);
	});

	it("enum radio imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Category",
				key: "category",
				kind: "enum",
				style: "radio",
				required: true,
				enumValues: [
					{ id: "1", label: "A", value: "a" },
					{ id: "2", label: "B", value: "b" },
				],
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(initialImports + radioImport);
	});

	it("multiple field type imports", () => {
		const fields: FormField[] = [
			{
				id: "1",
				label: "Bio",
				key: "bio",
				kind: "textarea",
				required: true,
			},
			{
				id: "2",
				label: "Active",
				key: "active",
				kind: "boolean",
				required: true,
			},
			{
				id: "3",
				label: "Category",
				key: "category",
				kind: "enum",
				style: "radio",
				required: true,
				enumValues: [
					{ id: "1", label: "A", value: "a" },
					{ id: "2", label: "B", value: "b" },
				],
			},
		];
		const result = generateImports(fields);
		expect(result).toContain(
			initialImports + textareaImport + switchImport + radioImport,
		);
	});
});
