// TODO: fix radio group
export const radio = `
  <Form.Fieldset {form} name="{{key}}" class="space-y-3">
    <Form.Legend>{{label}}</Form.Legend>
    <RadioGroup.Root
      class="flex flex-col space-y-1"
      name="type"
    >
      <div class="flex items-center space-x-3 space-y-0">
        <Form.Control>
          {#snippet children({ props })}
            <RadioGroup.Item value="all" {...props} />
            <Form.Label class="font-normal">All new messages</Form.Label>
          {/snippet}
        </Form.Control>
      </div>
      <div class="flex items-center space-x-3 space-y-0">
        <Form.Control>
          {#snippet children({ props })}
            <RadioGroup.Item value="mentions" {...props} />
            <Form.Label class="font-normal"
              >Direction messages and mentions</Form.Label
            >
          {/snippet}
        </Form.Control>
      </div>
      <div class="flex items-center space-x-3 space-y-0">
        <Form.Control>
          {#snippet children({ props })}
            <RadioGroup.Item value="none" {...props} />
            <Form.Label class="font-normal">Nothing</Form.Label>
          {/snippet}
        </Form.Control>
      </div>
    </RadioGroup.Root>
    <Form.FieldErrors />
  </Form.Fieldset>
`;
