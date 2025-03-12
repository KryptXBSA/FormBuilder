// TODO: slider with form
export const slider = `
 <Form.Field {form} name="{{key}}">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>{{label}}</Form.Label>
        <Slider {...props} type="single" bind:value={$formData["{{key}}"] } max={100} step={1} class="max-w-[70%]" />
      {/snippet}
    </Form.Control>
    <Form.Description>{{description}}</Form.Description>
    <Form.FieldErrors />
  </Form.Field>

	`;
