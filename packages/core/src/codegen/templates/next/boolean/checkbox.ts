export const checkbox = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<div className="flex items-center space-x-2">
							<ShadcnCheckbox value={field.value}id={f.key} onClick={(e)=>console.log("elick",field.value)} onChange={(e)=>console.log("eeeez",e)} />
							<label
								htmlFor={f.key}
								className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{{label}}
							</label>
						</div>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
`;
