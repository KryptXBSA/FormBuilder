
export const numberInputTemplate = `
<FormField
  control={form.control}
  name="{{key}}"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{{label}}</FormLabel>
      <FormControl>
        <Input type="number" placeholder="{{placeholder}}" {...field} />
      </FormControl>
      <FormDescription>
        {{desc}}
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`
