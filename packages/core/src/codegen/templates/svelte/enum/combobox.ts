// TODO: add enumName

export const combobox = `
 <Form.Field {form} name="{{key}}" class="flex flex-col">
    <Popover.Root >
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>{{label}}</Form.Label>
          <Popover.Trigger
            class={cn(
              buttonVariants({ variant: "outline" }),
              "w-[200px] justify-between",
              !$formData["{{key}}"] && "text-muted-foreground"
            )}
            role="combobox"
            {...props}
          >
            { {{enumName}}.find((f) => f.value === $formData["{{key}}"])?.label ?? "Select language"}
            <ChevronsUpDown class="opacity-50" />
          </Popover.Trigger>
          <input hidden value={$formData["{{key}}"]} name={props.name} />
        {/snippet}
      </Form.Control>
      <Popover.Content class="w-[200px] p-0">
        <Command.Root>
          <Command.Input
            autofocus
            placeholder="Search language..."
            class="h-9"
          />
          <Command.Empty>No {{enumName}} found.</Command.Empty>
          <Command.Group>
            {#each {{enumName}} as item}
              <Command.Item
                value={item.label}
                onSelect={() => {
                  $formData["{{key}}"] = item.value;
                }}
              >
                {item.label}
                <Check
                  class={cn(
                    "ml-auto",
                    item.value !== $formData["{{key}}"] && "text-transparent"
                  )}
                />
              </Command.Item>
            {/each}
          </Command.Group>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
    <Form.Description>{{description}}</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
`;
