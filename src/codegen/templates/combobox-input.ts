export const comboboxInputTemplate = `
<FormField
          control={form.control}
          name="{{key}}"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{{label}}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? {{enumName}}.find(
                            (item) => item.value === field.value
                          )?.label
                        : "Select item"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search {{enumName}}..." />
                    <CommandEmpty>No {{enumName}} found.</CommandEmpty>
                    <CommandGroup>
                      { {{enumName}}.map((item) => (
                        <CommandItem
                          value={item.label}
                          key={item.value}
                          onSelect={() => {
                            form.setValue("{{key}}", item.value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              item.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
              {{desc}}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        `
