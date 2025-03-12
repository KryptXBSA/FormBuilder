export const switchTemplate = `
  <FormField v-slot="{ value, handleChange }" name="{{key}}">
          <FormItem class="flex flex-row items-center justify-between rounded-lg border p-4">
            <div class="space-y-0.5">
              <FormLabel class="text-base">
                {{label}}
              </FormLabel>
              <FormDescription>
                {{description}}
              </FormDescription>
            </div>
            <FormControl>
             <Switch
                :model-value="value"
                @update:model-value="handleChange"
              />
            </FormControl>
          </FormItem>
        </FormField>
`;
