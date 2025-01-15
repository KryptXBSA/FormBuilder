// TODO: fix main template
export const mainSvelteTemplate = `
<form action="/?/inputOtp" method="POST" class="w-2/3 space-y-8" use:enhance>
      {{#each fields}}
        {{{lookupComponent this}}}
      {{/each}}
      <Form.Button>Submit</Form.Button>
</form>
`;
