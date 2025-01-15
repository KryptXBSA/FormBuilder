export const slider = `
<FormField v-slot="{ componentField, value }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <Slider
            v-bind="componentField"
            :default-value="{{validation?.default}}"
            :max="{{validation?.max}}"
            :min="{{validation?.min}}"
            :step="{{validation?.step}}"
          />
          <FormDescription>
			{{description}}
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
	`;
