export const mainVueTemplate = `
const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: formSchema,
})

        {{#each fields}}
          {{#ifEquals kind "enum"}}
              const {{enumName}} = [
                {{#each enumValues}}
                    { label: "{{label}}", value: "{{value}}" },
                {{/each}}
              ]
          {{/ifEquals}}
        {{/each}}

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

{{#each fields}}

{{#ifEquals variant "vue-shadcn-date-date"}}
const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})
{{/ifEquals}}
{{#ifEquals variant "vue-shadcn-text-inputotp"}}
const handleComplete = (e: string[]) => console.log(e.join(''))
{{/ifEquals}}
{{/each}}

</script>

<template>
  <form class="space-y-4 mx-auto max-w-3xl p-8" @submit="onSubmit">
        {{#each fields}}
          {{{lookupComponent this}}}
        {{/each}}
        <Button type="submit">
          Submit
        </Button>
  </form>
</template> 
`;
