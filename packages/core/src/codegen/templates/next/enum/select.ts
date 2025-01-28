export const select = `
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
                { {{enumName}}.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
              {{description}}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />`;
