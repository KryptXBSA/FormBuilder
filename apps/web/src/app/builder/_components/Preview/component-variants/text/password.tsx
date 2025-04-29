import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TextField, FormFramework } from "formbuilder-core";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

export function Password({
	f,
}: { f: TextField<FormFramework> }) {
	const form = useFormContext<any>();
	const [password, setPassword] = useState("");
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);


	return (
		<FormField
			control={form.control}
			name={f.key}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{f.label}</FormLabel>
					<FormControl>
						<div>
							<div className="space-y-2">
								<div className="relative">
									<Input
										{...field}
										id="input-51"
										className="pe-9"
										placeholder="Password"
										type={isVisible ? "text" : "password"}
										value={password}
										onChange={(e) => {
											field.onChange(e.target.value);
											setPassword(e.target.value);
										}}
									/>
									<button
										className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
										type="button"
										onClick={toggleVisibility}
										aria-label={isVisible ? "Hide password" : "Show password"}
										aria-pressed={isVisible}
										aria-controls="password"
									>
										{isVisible ? (
											<EyeOff size={16} strokeWidth={2} aria-hidden="true" />
										) : (
											<Eye size={16} strokeWidth={2} aria-hidden="true" />
										)}
									</button>
								</div>
							</div>
						</div>
					</FormControl>
					<FormDescription>{f.description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
