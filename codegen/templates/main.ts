export const mainTemplate = `const formSchema = {{{zodFormSchema}}}

        {{#each fields}}
          {{#ifEquals type "enum"}}
            {{#ifEquals style "combobox"}}
const {{enumName}} = [
                {{#each enumValues}}
                    { label: "{{label}}", value: "{{value}}" },
                {{/each}}
]
            {{/ifEquals}}
          {{/ifEquals}}
        {{/each}}
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
          {{#ifEquals type "number"}}
            {{> numberInput }}
          {{/ifEquals}}
          {{#ifEquals type "enum"}}
            {{#ifEquals style "radio"}}
             {{> radioInput }}
            {{/ifEquals}}
            {{#ifEquals style "combobox"}}
             {{> comboboxInput }}
            {{/ifEquals}}
            {{#ifEquals style "select"}}
             {{> selectInput }}
            {{/ifEquals}}
          {{/ifEquals}}
          {{#ifEquals type "date"}}
            {{> dateInput this}}
          {{/ifEquals}}
          {{#ifEquals type "string"}}
            {{> stringInput }}
          {{/ifEquals}}
          {{#ifEquals type "boolean"}}
            {{> booleanInput this}}
          {{/ifEquals}}
        {{/each}}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
`
