export const combobox = `import Check from "lucide-svelte/icons/check";
import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
import { tick } from "svelte";
import * as Command from "{{importAliasComponents}}/command/index.js";
import * as Popover from "{{importAliasComponents}}/popover/index.js";
import { Button } from "{{importAliasComponents}}/button/index.js";
import { cn } from "{{importAliasUtils}}";
`;

export const radio = `import * as RadioGroup from "{{importAliasComponents}}/radio-group/index.js";
`;

export const select = `
import * as Select from "{{importAliasComponents}}/select/index.js";
`;
