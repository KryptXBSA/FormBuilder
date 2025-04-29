# Contributing to Form Builder

Thank you for considering contributing to FormBuilder! We appreciate your help in making this project better.

*Note: This contribution guide may need improving, and we welcome any suggestions for enhancements.*

## Development workflow

We use [bun](https://bun.sh) as our package manager, but you can use any other package manager of your choice. Make sure to [install](https://bun.sh/docs/installation) it first if you choose to use bun.

```bash
git clone https://github.com/kryptxbsa/FormBuilder.git
cd FormBuilder
bun install
```
After installation, you can start the development server:

```bash
bun dev-web
```

## Project overview

This project is a monorepo. There is one main package located in the `packages/core` directory.

The `apps/web` directory contains the frontend application.

### core package `packages/core`

The `src/types` directory includes the primary types and component variants.

The `src/components` directory contains code for component variant definitions.

The `src/codegen` directory contains the main code for code generation, utilizing Handlebars. All logic for code generation and code templates are located there. 

### Adding a New Component (Next.js)

Let's say we wanted to add a new component in Next.js, follow these steps:

1. **Add the Variant**: 
   - Update the variant in `src/types/nextVariant.ts`.

2. **Add the Component Code and Imports**: 
   - Include the component code and necessary imports in `src/codegen/imports` and `src/codegen/templates`.

3. **Add the Component Config**: 
   - Configure the component in `src/components/next-components`.


