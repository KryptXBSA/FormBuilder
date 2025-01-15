export const textarea = `
<Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Textarea
          {...props}
          placeholder="{{placeholder}}"
          class="resize-none"
          bind:value={$formData.{{key}}}
        />
        <Form.Description>{{description}}</Form.Description>
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
`;
