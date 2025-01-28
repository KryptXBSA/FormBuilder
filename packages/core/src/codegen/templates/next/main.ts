// TODO fix main, add remaining code.

export const mainNextTemplate = `

        {{#each fields}}
          {{#ifEquals kind "enum"}}
              const {{enumName}} = [
                {{#each enumValues}}
                    { label: "{{label}}", value: "{{value}}" },
                {{/each}}
              ]
          {{/ifEquals}}
        {{/each}}

        {{#each fields}}
          {{#ifEquals variant "next-originui-text-inputtag"}}
          const tags = [
	        {
		      id: "1",
		      text: "Sport",
	        },
	        {
		      id: "2",
		      text: "Coding",
	        },
	        {
		      id: "3",
		      text: "Travel",
	        },
          ];
          {{/ifEquals}}
        {{/each}}

export function MyForm() {
  {{#each fields}}
  {{#ifEquals variant "next-originui-text-inputtag"}}
	const [exampleTags, setExampleTags] = useState<Tag[]>(tags);
	const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  {{/ifEquals}}

  {{#ifEquals variant "next-originui-text-password"}}
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const strength = checkStrength(password);

  const strengthScore = useMemo(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };
  {{/ifEquals}}
  {{/each}}
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
