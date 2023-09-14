export const selectInputTemplate = `
  <FormField
          control={form.control}
          name="{{key}}"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{{label}}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="{{placeholder}}" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {{#each enumValues}}
                  <SelectItem value="{{value}}">{{label}}</SelectItem>
                  {{/each}}
                </SelectContent>
              </Select>
              <FormDescription>
              {{desc}}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`
