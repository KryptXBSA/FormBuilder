export const combobox = `
 <FormField name="{{key}}">
      <FormItem class="flex flex-col">
        <FormLabel>{{label}}</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline"
                role="combobox"
                :class="cn('w-[200px] justify-between', !values['{{key}}'] && 'text-muted-foreground')"
              >
                {{DBO}} values['{{key}}'] ? {{enumName}}.find(
                  (language) => language.value === values['{{key}}'],
                )?.label : 'Select {{enumName}}...' {{DBC}}
                <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="{{placeholder}}" />
              <CommandEmpty>Nothing found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="item in {{enumName}}"
                    :key="item.value"
                    :value="item.label"
                    @select="() => {
                      setFieldValue('{{key}}', item.value)
                    }"
                  >
                    <Check
                      :class="cn('mr-2 h-4 w-4', item.value === values['{{key}}'] ? 'opacity-100' : 'opacity-0')"
                    />
                    {{DBO}} item.label {{DBC}}
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <FormDescription>
          {{description}}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
        `;
