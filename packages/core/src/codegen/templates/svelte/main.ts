// TODO: fix main template
export const mainSvelteTemplate = `

const { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } =
	$props();

const form = superForm(data.form, {
	validators: zodClient(formSchema),
});

const { form: formData, enhance } = form;

{{#each fields}}
          {{#ifEquals kind "enum"}}
              const {{enumName}} = [
                {{#each enumValues}}
                    { label: "{{label}}", value: "{{value}}" },
                {{/each}}
              ]
          {{/ifEquals}}
{{/each}}

{{#if hasDateFields}}
const df = new DateFormatter("en-US", {
    dateStyle: "long"
}); 
{{/if}}

</script>
<form class="space-y-4" method="post" use:enhance>
      {{#each fields}}
        {{{lookupComponent this}}}
      {{/each}}
      <Form.Button>Submit</Form.Button>
</form>
`;
