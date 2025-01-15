// TODO: fix select add enumName
export const select = `
  <Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Select.Root
          type="single"
          bind:value={$formData.{{key}}}
          name={props.name}
        >
          <Select.Trigger {...props}>
            {$formData.email
              ? $formData.email
              : "Select a verified email to display"}
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="m@example.com" label="m@example.com" />
            <Select.Item value="m@google.com" label="m@google.com" />
            <Select.Item value="m@support.com" label="m@support.com" />
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
