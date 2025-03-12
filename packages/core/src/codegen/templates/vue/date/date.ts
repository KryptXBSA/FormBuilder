export const date = `
 <FormField name="{{key}}">
      <FormItem class="flex flex-col">
        <FormLabel>{{label}}</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline" :class="cn(
                  'w-[240px] ps-3 text-start font-normal',
                  !values['{{key}}'] && 'text-muted-foreground',
                )"
              >
                <span>{{DBO}} values['{{key}}'] ? df.format(values['{{key}}']) : 'Pick a date' {{DBC}}</span>
                <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
              </Button>
              <input hidden>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar
              calendar-label="{{label}}"
              initial-focus
              @update:model-value="(v) => {
                if (v) {
                  setFieldValue('{{key}}', toDate(v))
                }
                else {
                  setFieldValue('{{key}}', undefined)
                }
              }"
            />
          </PopoverContent>
        </Popover>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
`;
