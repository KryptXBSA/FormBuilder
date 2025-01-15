// TODO: remove autosize?
export const autoResizeTextarea = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem>
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
							<AutosizeTextarea
								{...field}
								placeholder="{{placeholder}}"
								maxHeight={200}
							/>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	`;
