
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
        <Input  placeholder="{{label}}" {...field} />
          {{/ifEquals}}
      </FormControl>
      <FormDescription>
        {{label}} description here
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`
