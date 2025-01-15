// TODO: 2 variants for number input
export const number = `
 <FormField v-slot="{ componentField }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <Input type="number" placeholder="{{placeholder}}" v-bind="componentField" />
        </FormControl>
        <FormDescription>
			{{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
	`;
