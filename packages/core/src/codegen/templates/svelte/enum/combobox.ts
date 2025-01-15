// TODO: add enumName

export const combobox = `
 <Form.Field {form} name="{{key}}" class="flex flex-col">
    <Popover.Root bind:open>
      <Form.Control id={triggerId}>
        {#snippet children({ props })}
          <Form.Label>{{label}}</Form.Label>
          <Popover.Trigger
            class={cn(
              buttonVariants({ variant: "outline" }),
              "w-[200px] justify-between",
              !$formData.{{enumName}} && "text-muted-foreground"
            )}
            role="combobox"
            {...props}
          >
            {languages.find((f) => f.value === $formData.{{enumName}})?.label ??
              "Select language"}
            <ChevronsUpDown class="opacity-50" />
          </Popover.Trigger>
          <input hidden value={$formData.{{enumName}}} name={props.name} />
        {/snippet}
      </Form.Control>
      <Popover.Content class="w-[200px] p-0">
        <Command.Root>
          <Command.Input
            autofocus
            placeholder="Search language..."
            class="h-9"
          />
          <Command.Empty>No language found.</Command.Empty>
          <Command.Group>
            {#each languages as language}
              <Command.Item
                value={language.label}
                onSelect={() => {
                  $formData.{{enumName}} = language.value;
                  closeAndFocusTrigger(triggerId);
                }}
              >
                {language.label}
                <Check
                  class={cn(
                    "ml-auto",
                    language.value !== $formData.{{enumName}} && "text-transparent"
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
