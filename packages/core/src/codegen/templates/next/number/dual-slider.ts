export const dualSlider = `<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<DualRangeSlider
							className="pt-4"
							label={(value) => value}
							value={field.value || [0, 100]}
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
