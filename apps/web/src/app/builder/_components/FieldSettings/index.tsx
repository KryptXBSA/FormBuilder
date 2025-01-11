import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateFormSettings, useAppState } from "@/state/state";
import { FrameworkCombobox } from "./FrameworkCombobox";
import { Switch } from "@/components/ui/switch";
import { findFieldIndex } from "@/utils/findFieldIndex";

export function FieldSettings() {
	const state = useAppState();
	const { col, row } = findFieldIndex(
		state.currentForm.fields,
		state.showSettings!,
	)!;
	const data = state.currentForm.fields[row][col];
	return (
		<div className="flex px-24">
			<div className="flex w-full flex-col gap-8">
				<FormInput
					label="Key"
					value={data.key}
					onChange={(newValue) => state.updateField({ key: newValue })}
				/>
				<FormInput
					label="Label"
					value={data.label}
					onChange={(newValue) => state.updateField({ label: newValue })}
				/>
				<FormInput
					label="Description"
					value={data.description || ""}
					onChange={(newValue) => state.updateField({ description: newValue })}
				/>
				<FormInput
					label="Placeholder"
					value={data.placeholder || ""}
					onChange={(newValue) => state.updateField({ placeholder: newValue })}
				/>
			</div>

			<div className="mt-6 flex w-full flex-col gap-8 ">
				<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
					<div className="space-y-0.5">
						<div className="text-base">Required</div>
						<div>Is the field required?</div>
					</div>
					<div>
						<Switch
							checked={data.required}
							onCheckedChange={() =>
								state.updateField({
									required: !data.required,
								})
							}
						/>
					</div>
				</div>

				<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
					<div className="space-y-0.5">
						<div className="text-base">Disabled</div>
						<div>Is disabled?</div>
					</div>
					<div>
						<Switch
							checked={data.disabled}
							onCheckedChange={() =>
								state.updateField({
									disabled: !data.disabled,
								})
							}
						/>
					</div>
				</div>
				<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
					<div className="space-y-0.5">
						<div className="text-base">Hidden</div>
						<div>Is hidden?</div>
					</div>
					<div>
						<Switch
							checked={data.hidden}
							onCheckedChange={() =>
								state.updateField({
									hidden: !data.hidden,
								})
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

type FormInput = {
	label: string;
	value: string;
	onChange: (value: string) => void;
};

function FormInput({ label, value, onChange }: FormInput) {
	return (
		<div className="max-w-xs">
			<h4 className="scroll-m-20 font-semibold text-xl tracking-tight">
				{label}
			</h4>
			<Input
				placeholder={label}
				value={value}
				onChange={(e) => {
					const newValue = e.currentTarget.value;
					onChange(newValue);
				}}
			/>
		</div>
	);
}
