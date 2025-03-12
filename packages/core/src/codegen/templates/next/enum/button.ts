export const button = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="space-y-3">
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<div className="flex gap-2">
							{ {{enumName}}.map((item) => (
								<Button
									variant={field.value === item.value ? "outline" : "default"}
									type="button"
									key={item.value}
									onClick={() => {
										field.value === item.value
											? field.onChange(null)
											: field.onChange(item.value);
									}}
								>
									{item.label}
								</Button>
							))}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
		`;
