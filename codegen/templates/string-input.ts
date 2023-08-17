export const stringInputTemplate = `
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
        {{desc}}
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`
