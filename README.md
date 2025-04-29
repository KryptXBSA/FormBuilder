# Form Builder for @shadcn/ui

UI-based code generation tool to easily create @shadcn/ui forms (Next.js, Vue, Svelte).

Try it out [here](https://formbuilder.kryptxbsa.com).

![FormBuilder demo](./builder.png)

## Table of Contents
- [Field Types](#field-types)
- [Installation & Usage](#installation-usage)
- [Contributing](#contributing)
- [License](#license)

## Field Types

Currently, these field types are implemented:

- **Heading** 
- **Text** (Input, Textarea, Password)
- **Number** (Input, Slider)
- **Boolean** (Checkbox, Switch)
- **Enum** (Select, Radio, Combobox)
- **Date** (Date picker)

More field types per framework.

## Installation & Usage

To install the Form Builder and run locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/kryptxbsa/FormBuilder.git
cd FormBuilder
bun install
```

After installation, you can start the development server:

```bash
bun dev-web
```

Visit `http://localhost:7017` to see the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request. For more details, check the [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License.
