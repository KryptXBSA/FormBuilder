// TODOVUE: add code from body to main
// https://www.shadcn-vue.com/docs/components/pin-input.html#form
export const inputOTP = `
 <FormField v-slot="{ componentField, value }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <PinInput
            id="pin-input"
            :model-value="value"
            placeholder="{{placeholder}}"
            class="flex gap-2 items-center mt-1"
            otp
            type="number"
            :name="componentField.name"
            @complete="handleComplete"
            @update:model-value="(arrStr) => {
              setFieldValue('{{key}}', arrStr.filter(Boolean))
            }"
          >
            <PinInputGroup>
              <PinInputInput
                v-for="(id, index) in 5"
                :key="id"
                :index="index"
              />
            </PinInputGroup>
          </PinInput>
        </FormControl>
        <FormDescription>
		{{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
		`;
