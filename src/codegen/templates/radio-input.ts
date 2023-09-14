
export const radioInputTemplate = `
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
                  {{#each enumValues}}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="{{value}}" />
                    </FormControl>
                    <FormLabel className="font-normal">
                    {{label}}
                    </FormLabel>
                  </FormItem>
                  {{/each}}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
`
