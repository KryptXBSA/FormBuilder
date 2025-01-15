export const inputOTP = `<Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <InputOTP.Root maxlength={6} {...props} bind:value={$formData.{{key}}}>
          {#snippet children({ cells })}
            <InputOTP.Group>
              {#each cells as cell}
                <InputOTP.Slot {cell} />
              {/each}
            </InputOTP.Group>
          {/snippet}
        </InputOTP.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>{{description}}</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
`;
