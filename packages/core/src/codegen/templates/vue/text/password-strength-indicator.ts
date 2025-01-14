// TODO: recreate logic for vue from next
export const passwordStrengthIndicator = `
  <FormField v-slot="{ componentField }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          <Input type="password" placeholder="{{placeholder}}" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
`;
