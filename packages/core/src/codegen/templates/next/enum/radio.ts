export const radio = `
<FormField
          control={form.control}
          name="{{key}}"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{{label}}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                {  {{enumName}}.map((item) => (
                  <FormItem key={item.value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={item.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                    {{label}}
                    </FormLabel>
                  </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormDescription>
              {{description}}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
`;
