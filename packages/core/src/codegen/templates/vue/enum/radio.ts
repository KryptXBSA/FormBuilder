// TODO: add enumName
export const radio = `
 <FormField v-slot="{ componentField }" type="radio" name="{{key}}">
      <FormItem class="space-y-3">
        <FormLabel>{{label}}</FormLabel>

        <FormControl>
          <RadioGroup
            class="flex flex-col space-y-1"
            v-bind="componentField"
          >
            <template v-for="item in {{enumName}}" :key="item.value">
              <FormItem class="flex items-center space-y-0 gap-x-3">
                <FormControl>
                  <RadioGroupItem :value="item.value" />
                </FormControl>
                <FormLabel class="font-normal">
                  {{DBO}} item.label {{DBC}}
                </FormLabel>
              </FormItem>
            </template>

          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
`;
