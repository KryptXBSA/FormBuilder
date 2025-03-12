export const switchTemplate = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
					<div className="">
						<FormLabel className="text-base">{{label}}</FormLabel>
						<FormDescription>{{description}}</FormDescription>
					</div>
					<FormControl>
						<Switch
							checked={field.value}
							onCheckedChange={field.onChange}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
`;
