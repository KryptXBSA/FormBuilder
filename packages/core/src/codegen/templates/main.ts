export const mainTemplate = `const formSchema = {{{zodFormSchema}}}

        {{#each fields}}
          {{#ifEquals kind "enum"}}
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
          {{#ifEquals kind "number"}}
            {{> numberInput }}
          {{/ifEquals}}
          {{#ifEquals kind "enum"}}
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
          {{#ifEquals kind "date"}}
            {{> dateInput this}}
          {{/ifEquals}}
          {{#ifEquals kind "string"}}
            {{> stringInput }}
          {{/ifEquals}}
          {{#ifEquals kind "boolean"}}
            {{> booleanInput this}}
          {{/ifEquals}}
          {{#ifEquals kind "textarea"}}
            {{> textareaInput }}
          {{/ifEquals}}
        {{/each}}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
`;
