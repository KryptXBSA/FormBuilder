export const input = `
    <FormField v-slot="{ componentField }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <FormControl>
          {{#ifEquals validation.format "email"}}
          <Input type="email" placeholder="{{placeholder}}" v-bind="componentField" />
             {{else}}
          <Input type="text" placeholder="{{placeholder}}" v-bind="componentField" />
          {{/ifEquals}}
        </FormControl>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
`;
