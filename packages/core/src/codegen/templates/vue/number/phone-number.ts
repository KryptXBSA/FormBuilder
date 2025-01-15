// TODO: implment phone
// https://shadcn-vue-phone-input.vercel.app/
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
