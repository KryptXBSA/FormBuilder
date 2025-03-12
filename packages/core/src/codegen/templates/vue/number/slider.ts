export const slider = `
<FormField v-slot="{ componentField, value }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <Slider
            :model-value="componentField.modelValue"
            :max="{{validation.max}}"
            :min="{{validation.min}}"
            :step="{{validation.step}}"
            :name="componentField.name"
            @update:model-value="componentField['onUpdate:modelValue']"
          />
          <FormDescription>
			{{description}}
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
	`;
