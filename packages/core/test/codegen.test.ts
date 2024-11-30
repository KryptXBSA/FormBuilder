import { expect, test } from "bun:test";
import { generateCode } from "../src/codegen/generate-code";
import { mockFields } from "../src/mock/mockFields";
import { toBe } from "./mock";

test("test generate code", () => {
	const code = generateCode({
		name: "test",
		fields: mockFields,
	});
	expect(code).toBeDefined();
	Bun.write("./apps/web/src/app/test/page.tsx", code);
	// expect(code).toBe(toBe);
});
