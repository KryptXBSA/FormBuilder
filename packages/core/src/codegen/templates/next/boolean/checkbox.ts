export const checkbox = `
			<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
					<FormControl>
						<Checkbox
							className="mt-0.5"
							checked={field.value}
							onCheckedChange={field.onChange}
						/>
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel>{{label}}</FormLabel>
						<FormDescription>{{description}}</FormDescription>
						<FormMessage />
					</div>
				</FormItem>
			)}
		/>
`;
