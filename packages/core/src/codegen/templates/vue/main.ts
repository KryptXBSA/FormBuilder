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
const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    fruits: ['Apple', 'Banana'],
  },
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
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
