// TODO: phone number input
// https://www.shadcn-svelte-extras.com/components/phone-input
export const phoneNumber = `
		<FormField
			control={form.control}
			name="{{key}}"
			render={({ field }) => (
				<FormItem>
					<FormLabel>{{label}}</FormLabel>
					<FormControl>
						<PhoneInput
							smartCaret={true}
							{...field}
							international
							placeholder="{{placeholder}}"
						/>
					</FormControl>
					<FormDescription>{{description}}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	`;
