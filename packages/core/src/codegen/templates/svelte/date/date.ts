export const date = `
 <Form.Field {form} name="{{key}}" class="flex flex-col">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Popover.Root>
          <Popover.Trigger
            {...props}
            class={cn(
              buttonVariants({ variant: "outline" }),
              "w-[280px] justify-start pl-4 text-left font-normal",
              !$formData["{{key}}"] && "text-muted-foreground"
            )}
          >
            {$formData["{{key}}"]
              ? df.format($formData["{{key}}"])
              : "Pick a date"}
            <CalendarIcon class="ml-auto size-4 opacity-50" />
          </Popover.Trigger>
          <Popover.Content class="w-auto p-0" side="top">
            <Calendar
              type="single"
              minValue={new CalendarDate(1900, 1, 1)}
              calendarLabel="{{label}}"
              onValueChange={(v) => {
                  if (v) {
                    $formData["{{key}}"] = new Date(v.toString());
                  }
              }}
            />
          </Popover.Content>
        </Popover.Root>
        <Form.Description>{{description}}</Form.Description>
        <Form.FieldErrors />
        <input hidden bind:value={$formData["{{key}}"]} name={props.name} />
      {/snippet}
    </Form.Control>
  </Form.Field>
`;
