export const slider = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<ShadcnSlider
							className="pt-4"
							// label={(value) => value}
							value={field.value}
							onValueChange={(e: any) => field.onChange(e)}
							min={f.validation?.min}
							max={f.validation?.max}
							step={f.validation?.step}
						/>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	`;
