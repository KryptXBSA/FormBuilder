export const checkbox = `
 <FormField v-slot="{ value, handleChange }" type="checkbox" name="{{key}}">
      <FormItem class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
        <FormControl>
          <Checkbox :model-value="value" @update:model-value="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel>{{label}}</FormLabel>
          <FormDescription>
            {{description}}
          </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
`;
