import { FormSwitch, FormInput } from "../SettingInputs";

import { useAppState } from "@/state/state";

export default function FormSettings() {
	const state = useAppState();
	return (
		<div className="flex gap-6 px-24">
			<div className="flex w-full flex-col gap-8 ">
				<FormInput
					label="Name"
					value={state.currentForm.name}
					onChange={(newValue) => state.updateFormName(newValue)}
				/>

				<FormInput
					label="Import Alias Utils"
					value={state.currentForm.settings.importAliasUtils}
					onChange={(newValue) =>
						state.updateFormSettings({ importAliasUtils: newValue })
					}
				/>
				<FormInput
					label="Import Alias Components"
					value={state.currentForm.settings.importAliasComponents}
					onChange={(newValue) =>
						state.updateFormSettings({ importAliasComponents: newValue })
					}
				/>
			</div>
			<div className="mt-6 flex w-full flex-col gap-8">
				<FormSwitch
					title="No placeholder"
					subtitle="No placeholder"
					checked={state.currentForm.settings.noPlaceholder || false}
					onCheckedChange={() =>
						state.updateFormSettings({
							noPlaceholder: !state.currentForm.settings.noPlaceholder,
						})
					}
				/>

				<FormSwitch
					title="No description"
					subtitle="No description"
					checked={state.currentForm.settings.noDescription || false}
					onCheckedChange={() =>
						state.updateFormSettings({
							noDescription: !state.currentForm.settings.noDescription,
						})
					}
				/>
			</div>
		</div>
	);
}
