// TODO: add vue buttons
export const button = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="space-y-3">
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<div className="flex gap-2">
							{btns.map((btn) => (
								<Button
									variant={field.value === btn.value ? "outline" : "default"}
									type="button"
									key={btn.label}
									onClick={() => {
										field.value === btn.value
											? field.onChange(null)
											: field.onChange(btn.value);
									}}
								>
									{btn.label}
								</Button>
							))}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
		`;
