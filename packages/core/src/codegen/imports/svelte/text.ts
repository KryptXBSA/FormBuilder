export const Input = `import { Input } from "{{importAliasComponents}}/input/index.js";`;
export const Textarea = `import { Textarea } from "{{importAliasComponents}}/textarea/index.js";`;
// TODO: remove this?
export const AutoresizeTextarea = `import { AutosizeTextarea } from "{{importAliasComponents}}/autosize-textarea/index.js";`;
export const InputOTP = `
import * as InputOTP from "{{importAliasComponents}}/input-otp/index.js";
`;

// TODO: remove this? or implement tagInput
export const InputTag = `import { TagInput } from "emblor";`;

// TODO: remove this? or implement passwordStrengthIndicator
export const PasswordStrengthIndicator = `import { Input } from "{{importAliasComponents}}/input/index.js";
import { Check, Eye, EyeOff, X } from "lucide-svelte/icons/index.js";
import { useMemo, useState } from "svelte";
`;
