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
	InputOTPSeparator,
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
						<ShadcnInputOTP {...field} maxLength={6}>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
							</InputOTPGroup>
							<InputOTPSeparator />
							<InputOTPGroup>
								<InputOTPSlot index={3} />
								<InputOTPSlot index={4} />
								<InputOTPSlot index={5} />
							</InputOTPGroup>
						</ShadcnInputOTP>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
