// TODO: add the initial values in main
export const inputTag = `<FormField v-slot="{ value }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <TagsInput :model-value="value">
            <TagsInputItem v-for="item in value" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="{{placeholder}}" />
          </TagsInput>
        </FormControl>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
`;
