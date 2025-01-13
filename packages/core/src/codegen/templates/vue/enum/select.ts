// TODO: add enumName
export const select = `
 <FormField v-slot="{ componentField }" name="{{key}}">
      <FormItem>
        <FormLabel>{{label}}</FormLabel>
        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="{{placeholder}}" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="m@example.com">
                m@example.com
              </SelectItem>
              <SelectItem value="m@google.com">
                m@google.com
              </SelectItem>
              <SelectItem value="m@support.com">
                m@support.com
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    `