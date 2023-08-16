
export const numberInputTemplate = `
<FormField
  control={form.control}
  name="{{key}}"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{{label}}</FormLabel>
      <FormControl>
        <Input type="number" placeholder="{{label}}" {...field} />
      </FormControl>
      <FormDescription>
        {{label}} description here
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`
