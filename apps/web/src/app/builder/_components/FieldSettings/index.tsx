import { Input } from "@/components/ui/input";
import { useAppState } from "@/state/state";
import { Switch } from "@/components/ui/switch";
import { findFieldIndex } from "@/utils/findFieldIndex";
import { H5 } from "@/components/ui/heading-with-anchor";
import {
	FormSwitch,
	FormInput,
	FormEnumInput,
	HeadingLevelComboBox,
} from "../SettingInputs";

export function FieldSettings() {
	const state = useAppState();
	if (!state.fieldId) throw new Error("Field ID is not set");

	const { col, row } = findFieldIndex(state.currentForm.fields, state.fieldId)!;
	const data = state.currentForm.fields[row][col];
	return (
		<div className="flex gap-6 px-24">
			<div className="flex w-full flex-col gap-2">
				<H5 className="">Configuration</H5>
				<div className="flex w-full flex-col gap-8">
					{data.kind !== "heading" && (
						<FormInput
							label="Key"
							value={data.key}
							onChange={(newValue) => state.updateField({ key: newValue })}
						/>
					)}
					<FormInput
						label="Label"
						value={data.label}
						onChange={(newValue) => state.updateField({ label: newValue })}
					/>
					{data.kind === "heading" && (
						<div>
							<HeadingLevelComboBox
								headingLevel={data.headingLevel || "H1"}
								onChange={(newValue) =>
									state.updateField({ headingLevel: newValue as any })
								}
							/>
						</div>
					)}
					{data.kind !== "heading" && (
						<FormInput
							label="Description"
							value={data.description || ""}
							onChange={(newValue) =>
								state.updateField({ description: newValue })
							}
						/>
					)}
					{!data.variant.includes("text-inputotp") &&
						data.kind !== "boolean" &&
						data.kind !== "date" &&
						data.kind !== "heading" && (
							<FormInput
								label="Placeholder"
								value={data.placeholder || ""}
								onChange={(newValue) =>
									state.updateField({ placeholder: newValue })
								}
							/>
						)}
					{data.kind === "enum" && (
						<FormInput
							label="Enum name"
							value={data.enumName || ""}
							onChange={(newValue) => state.updateField({ enumName: newValue })}
						/>
					)}
					{data.kind === "enum" && (
						<FormEnumInput
							label="Enum Values"
							value={data.enumValues || []}
							onChange={(newValue) =>
								state.updateField({ enumValues: newValue })
							}
						/>
					)}
				</div>
			</div>

			{data.kind !== "heading" && (
				<div className="flex w-full flex-col gap-2">
					<H5 className="">Validation</H5>
					{data.kind === "text" && data.variant.endsWith("text-input") && (
						<FormSwitch
							title="Email"
							subtitle="Is the field an email?"
							checked={data.validation?.isEmail || false}
							onCheckedChange={() =>
								state.updateFieldValidation({
									isEmail: !data.validation.isEmail,
								})
							}
						/>
					)}
					<div className="flex w-full flex-col gap-8 ">
						{!data.variant.includes("text-inputotp") &&
							data.kind !== "boolean" &&
							data.kind !== "date" &&
							data.kind !== "enum" &&
							// @ts-ignore
							data.kind !== "heading" && (
								<div className="flex gap-2">
									<FormInput
										type="number"
										label="Min"
										value={data.validation?.min || ""}
										onChange={(newValue) =>
											state.updateFieldValidation({
												min: Number(newValue),
											})
										}
									/>
									<FormInput
										type="number"
										label="Max"
										value={data.validation?.max || ""}
										onChange={(newValue) =>
											state.updateFieldValidation({
												max: Number(newValue),
											})
										}
									/>
								</div>
							)}

						{data.variant.endsWith("text-inputotp") && (
							<FormInput
								type="number"
								label="Digits"
								// @ts-ignore
								value={data.digits || 6}
								onChange={(newValue) =>
									state.updateField({
										digits: Number(newValue),
									})
								}
							/>
						)}
						{data.kind === "number" && (
							<FormInput
								type="number"
								label="Step"
								value={data.validation?.step || 1}
								onChange={(newValue) =>
									state.updateFieldValidation({
										step: Number(newValue),
									})
								}
							/>
						)}

						{/* @ts-ignore */}
						{data.kind !== "heading" && (
							<FormSwitch
								title="Required"
								subtitle="Is the field required?"
								checked={data.required}
								onCheckedChange={() =>
									state.updateField({
										required: !data.required,
									})
								}
							/>
						)}

						{/* @ts-ignore */}
						{data.kind !== "heading" && (
							<FormSwitch
								title="Disabled"
								subtitle="Is the field disabled?"
								checked={data.disabled || false}
								onCheckedChange={() =>
									state.updateField({
										disabled: !data.disabled,
									})
								}
							/>
						)}
						{data.kind === "number" && (
							<FormSwitch
								title="Negative"
								subtitle="Allow negative numbers?"
								checked={data.validation?.allowNegative || false}
								onCheckedChange={() =>
									state.updateFieldValidation({
										allowNegative: !data.validation?.allowNegative,
									})
								}
							/>
						)}
						{data.kind === "number" && (
							<FormSwitch
								title="Decimal"
								subtitle="Allow decimal?"
								checked={data.validation?.allowDecimal || false}
								onCheckedChange={() =>
									state.updateFieldValidation({
										allowDecimal: !data.validation?.allowDecimal,
									})
								}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
