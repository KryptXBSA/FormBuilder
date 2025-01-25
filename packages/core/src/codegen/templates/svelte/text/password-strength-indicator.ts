// TODO: svelte custom password strength indicator
export const passwordStrengthIndicator = `
<FormField
	control={form.control}
	name="{{key}}"
	render={({ field }) => (
		<FormItem>
			<FormLabel>{{label}}</FormLabel>
			<FormControl>
				<div>
					{/* Password input field with toggle visibility button */}
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
								aria-invalid={strengthScore < 4}
								aria-describedby="password-strength"
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

					{/* Password strength indicator */}
					<div
						className="mt-3 mb-4 h-1 w-full overflow-hidden rounded-full bg-border"
						role="progressbar"
						aria-valuenow={strengthScore}
						aria-valuemin={0}
						aria-valuemax={4}
						aria-label="Password strength"
					>
						<div
							className={&#96;h-full &#36;{getStrengthColor(strengthScore)} transition-all duration-500 ease-out&#96;}
							style={{ width: &#96;&#36;{(strengthScore / 4) * 100}%&#96; }}
						></div>
					</div>

					{/* Password strength description */}
					<p
						id="password-strength"
						className="mb-2 font-medium text-foreground text-sm"
					>
						{getStrengthText(strengthScore)}. Must contain:
					</p>

					{/* Password requirements list */}
					<ul className="space-y-1.5" aria-label="Password requirements">
						{strength.map((req, index) => (
							<li key={index} className="flex items-center gap-2">
								{req.met ? (
									<Check
										size={16}
										className="text-emerald-500"
										aria-hidden="true"
									/>
								) : (
									<X
										size={16}
										className="text-muted-foreground/80"
										aria-hidden="true"
									/>
								)}
								<span
									className={&#96;text-xs &#36;{req.met ? "text-emerald-600" : "text-muted-foreground"}&#96;}
								>
									{req.text}
									<span className="sr-only">
										{req.met
											? " - Requirement met"
											: " - Requirement not met"}
									</span>
								</span>
							</li>
						))}
					</ul>
				</div>
			</FormControl>
			<FormDescription>{{description}}</FormDescription>
			<FormMessage />
		</FormItem>
	)}
/>
`;
