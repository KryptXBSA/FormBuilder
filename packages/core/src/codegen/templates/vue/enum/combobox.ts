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
                :class="cn('w-[200px] justify-between', !values.language && 'text-muted-foreground')"
              >
                {{ values.language ? {{enumName}}.find(
                  (language) => language.value === values.language,
                )?.label : 'Select {{enumName}}...' }}
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
                    v-for="language in {{enumName}}"
                    :key="language.value"
                    :value="language.label"
                    @select="() => {
                      setFieldValue('{{key}}', language.value)
                    }"
                  >
                    <Check
                      :class="cn('mr-2 h-4 w-4', language.value === values.language ? 'opacity-100' : 'opacity-0')"
                    />
                    {{ language.label }}
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
