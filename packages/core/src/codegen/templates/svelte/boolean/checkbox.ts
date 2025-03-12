export const checkbox = `
<Form.Field
    {form}
    name="{{key}}"
    class="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
  >
    <Form.Control>
      {#snippet children({ props })}
        <Checkbox {...props} bind:checked={$formData["{{key}}"]} />
        <div class="space-y-1 leading-none">
          <Form.Label>{{label}}</Form.Label>
          <Form.Description>
            {{description}}
          </Form.Description>
        </div>
      {/snippet}
    </Form.Control>
  </Form.Field>
`;
