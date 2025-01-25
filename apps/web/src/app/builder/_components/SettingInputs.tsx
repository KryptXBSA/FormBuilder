import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type FormInput = {
	label: string;
	value: string | number;
	onChange: (value: string) => void;
	type?: "number" | "text";
};

export function FormInput({ label, value, onChange, type }: FormInput) {
	return (
		<div className="">
			<h4 className="scroll-m-20 font-semibold tracking-tight">{label}</h4>
			<Input
				type={type || "text"}
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

type FormSwitch = {
	title: string;
	subtitle: string;
	checked: boolean;
	onCheckedChange: () => void;
};

export function FormSwitch({ title, subtitle, checked, onCheckedChange }: FormSwitch) {
	return (
		<div className="flex max-w-sm flex-row items-center justify-between rounded-lg border p-4">
			<div className="-space-y-0.5 flex flex-col">
				<span className="text-base">{title}</span>
				<span className="text-muted-foreground text-sm">{subtitle}</span>
			</div>
			<div>
				<Switch checked={checked} onCheckedChange={onCheckedChange} />
			</div>
		</div>
	);
}