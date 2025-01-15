export const svelteInitialImports = `
  import  {
    type Infer,
    type SuperValidated,
    superForm
  } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import * as Form from "{{importAliasComponents}}/form/index.js";
  import { Input } from "{{importAliasComponents}}/input/index.js";
  import { page } from "$app/state";
`;
