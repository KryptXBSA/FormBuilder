// TODO: add daterange svelte with forms
export const daterange = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem className="flex flex-col">
					<FormLabel>{{label}}</FormLabel>
					<div className={cn("grid gap-2", "")}>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									id="date"
									variant={"outline"}
									className={cn(
										"w-[300px] justify-start text-left font-normal",
										!field.value && "text-muted-foreground",
									)}
								>
									<CalendarIcon />
									{field.value?.from ? (
										field.value.to ? (
											<>
												{format(field.value.from, "LLL dd, y")} -{" "}
												{format(field.value.to, "LLL dd, y")}
											</>
										) : (
											format(field.value.from, "LLL dd, y")
										)
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0" align="start">
								<Calendar
									initialFocus
									mode="range"
									defaultMonth={field.value?.from}
									selected={field.value}
									onSelect={field.onChange}
									numberOfMonths={2}
								/>
							</PopoverContent>
						</Popover>
					</div>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
`;
