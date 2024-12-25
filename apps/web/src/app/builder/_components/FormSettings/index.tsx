import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { updateFormSettings, useAppState } from "@/state/state";
import { FrameworkCombobox } from "./FrameworkCombobox";
import { Switch } from "@/components/ui/switch";

export default function SettingsForm() {
	const state = useAppState();
	return (
		<div className="flex flex-col gap-8 px-24">
			<FormInput
				label="Name"
				value={state.currentForm.name}
				onChange={(newValue) => state.updateFormName(newValue)}
			/>

			<div>
				<h4 className="scroll-m-20 font-semibold text-xl tracking-tight">
					Form Submission
				</h4>

				<RadioGroup className="flex" defaultValue="comfortable">
					<div
						onClick={(e) => console.log("eee", e)}
						className="flex items-center space-x-2"
					>
						<RadioGroupItem value="Server Actions" id="r1" />
						<Label htmlFor="r1">Server Actions</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="comfortable" id="r2" />
						<Label htmlFor="r2">Client Side</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="compact" id="r3" />
						<Label htmlFor="r3">client side</Label>
					</div>
				</RadioGroup>
			</div>
			<div>
				<h4 className="scroll-m-20 font-semibold text-xl tracking-tight">
					Form Mode
				</h4>

				<RadioGroup className="flex" defaultValue="comfortable">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="Server Actions" id="r1" />
						<Label htmlFor="r1">Default</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="comfortable" id="r2" />
						<Label htmlFor="r2">Comfortable</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="compact" id="r3" />
						<Label htmlFor="r3">Compact</Label>
					</div>
				</RadioGroup>
			</div>

			<FormInput
				label="Import Alias"
				value={state.currentForm.settings.importAlias}
				onChange={(newValue) =>
					state.updateFormSettings({ importAlias: newValue })
				}
			/>

			<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
				<div className="space-y-0.5">
					<div className="text-base">No placeholder</div>
					<div>Don't place a placeholder</div>
				</div>
				<div>
					<Switch
						checked={state.currentForm.settings.noPlaceholder}
						onCheckedChange={() =>
							updateFormSettings({
								noPlaceholder: !state.currentForm.settings.noPlaceholder,
							})
						}
					/>
				</div>
			</div>

			<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
				<div className="space-y-0.5">
					<div className="text-base">No description</div>
					<div>No description</div>
				</div>
				<div>
					<Switch
						checked={state.currentForm.settings.noDescription}
						onCheckedChange={() =>
							updateFormSettings({
								noDescription: !state.currentForm.settings.noDescription,
							})
						}
					/>
				</div>
			</div>

			<div className="max-w-sm">
				<h4 className="scroll-m-20 font-semibold text-xl tracking-tight">
					Framework
				</h4>
				<FrameworkCombobox />
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
		<div className="max-w-sm">
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
