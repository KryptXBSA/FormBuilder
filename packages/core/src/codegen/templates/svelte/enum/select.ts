// TODO: fix select add enumName
export const select = `
 <Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Select.Root
          type="single"
          bind:value={$formData["{{key}}"]}
          name={props.name}
        >
          <Select.Trigger {...props}>
            {$formData["{{key}}"]
              ? $formData["{{key}}"]
              : "Select a {{enumName}} to display"}
          </Select.Trigger>
          <Select.Content>
            {#each {{enumName}} as item}
            <Select.Item value={item.value} label={item.label} />
            {/each}
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>
    {{description}}
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>
`;
