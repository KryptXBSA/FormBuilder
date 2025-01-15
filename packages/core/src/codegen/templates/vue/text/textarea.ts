export const textarea = `
<FormField v-slot="{ componentField }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <Textarea
            placeholder="{{placeholder}}"
            class="resize-none"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
`;
