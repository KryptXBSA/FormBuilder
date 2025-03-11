// TODO fix main, add remaining code.

//         {{#each fields}}
//           {{#if (eq kind "enum")}}
//             {{#if (eq style "combobox")}}
// const {{enumName}} = [
//                 {{#each enumValues}}
//                     { label: "{{label}}", value: "{{value}}" },
//                 {{/each}}
// ]
//             {{/if}}
//           {{/if}}
//         {{/each}}
export const mainVueTemplate = `
const { handleSubmit, setFieldValue } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

{{#each fields}}
{{#ifEquals variant "vue-shadcn-text-inputotp"}}
const handleComplete = (e: string[]) => console.log(e.join(''))
{{/ifEquals}}
{{/each}}

</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
        {{#each fields}}
          {{{lookupComponent this}}}
        {{/each}}
        <Button type="submit">
          Submit
        </Button>
  </form>
</template> 
`;
