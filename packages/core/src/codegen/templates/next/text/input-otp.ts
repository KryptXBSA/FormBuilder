export const inputOTP = `<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem>
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<InputOTP {...field} maxLength={ {{digits}} }>
							<InputOTPGroup>
								{{#times digits}}
								<InputOTPSlot index={ {{this}} } />
								{{/times}}
							</InputOTPGroup>
						</InputOTP>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
		`;
