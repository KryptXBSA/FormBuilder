import type { TextField, FormFramework } from "formbuilder-core";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import {
	InputOTP as ShadcnInputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

export function InputOTP({ f }: { f: TextField<FormFramework> }) {
	const form = useFormContext<any>();
	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<ShadcnInputOTP {...field} maxLength={f.digits!}>
							<InputOTPGroup>
								{Array.from({ length: f.digits! }, (_, i) => (
									<InputOTPSlot index={i} key={i} />
								))}
							</InputOTPGroup>
						</ShadcnInputOTP>
					</FormControl>
					<FormDescription>z{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
