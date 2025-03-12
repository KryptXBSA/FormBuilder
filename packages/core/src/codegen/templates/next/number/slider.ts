export const slider = `<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<Slider
							className="pt-4"
							value={field.value}
							onValueChange={(e: any) => field.onChange(e)}
							min={ {{validation.min}} }
							max={ {{validation.max}} }
							step={ {{validation.step}} }
						/>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	`;
