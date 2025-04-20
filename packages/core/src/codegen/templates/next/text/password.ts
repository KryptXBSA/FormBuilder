
export const password = `
<FormField
	control={form.control}
	name="{{key}}"
	render={({ field }) => (
		<FormItem>
			<FormLabel>{{label}}</FormLabel>
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
			<FormDescription>{{description}}</FormDescription>
			<FormMessage />
		</FormItem>
	)}
/>
`;
