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
export const mainNextTemplate = `const formSchema = {{{zodFormSchema}}}

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {{{defaultValues fields}}},
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {{#each fields}}
          {{{lookupComponent this}}}
        {{/each}}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
`;
