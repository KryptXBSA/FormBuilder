export const switchTemplate = `
  <Form.Field
        {form}
        name="{{key}}"
        class="flex flex-row items-center justify-between rounded-lg border p-4"
      >
        <Form.Control>
          {#snippet children({ props })}
            <div class="space-y-0.5">
              <Form.Label>{{label}}</Form.Label>
              <Form.Description>
                {{description}}
              </Form.Description>
            </div>
            <Switch {...props} bind:checked={$formData["{{key}}"]} />
          {/snippet}
        </Form.Control>
      </Form.Field>
`;
