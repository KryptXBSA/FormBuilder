export const input = `
<FormField
  control={form.control}
  name="{{key}}"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{{label}}</FormLabel>
      <FormControl>
          {{#ifEquals validation.format "email"}}
        <Input type="email" placeholder="{{label}}" {...field} />
        {{else}}
        <Input  placeholder="{{placeholder}}" {...field} />
          {{/ifEquals}}
      </FormControl>
      <FormDescription>
        {{description}}
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`;
