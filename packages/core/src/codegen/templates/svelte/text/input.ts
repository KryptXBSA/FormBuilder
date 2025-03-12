export const input = `
  <Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Input {...props} bind:value={$formData["{{key}}"] } />
      {/snippet}
    </Form.Control>
    <Form.Description>{{description}}</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
`;
