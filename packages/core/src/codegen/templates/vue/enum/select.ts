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
              <template v-for="item in {{enumName}}" :key="item.value">
              <SelectItem :value="item.value">
                  {{DBO}} item.label {{DBC}}
              </SelectItem>
            </template>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    `;
