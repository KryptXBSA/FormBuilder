export const textareaInputTemplate = `
<FormField
  control={form.control}
  name="{{key}}"
  render={({ field }) => (
    <FormItem>
      <FormLabel>{{label}}</FormLabel>
      <FormControl>
        <Textarea
            placeholder="{{placeholder}}"
            className="resize-none"
            {...field}
        />
      </FormControl>
      <FormDescription>
        {{desc}}
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
`;
