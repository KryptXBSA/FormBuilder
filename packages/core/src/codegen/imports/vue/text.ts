export const Input = `import { Input } from "{{importAliasComponents}}/input";`;
export const Textarea = `import { Textarea } from "{{importAliasComponents}}/textarea";`;
export const AutoresizeTextarea = `import { AutosizeTextarea } from "{{importAliasComponents}}/autosize-textarea";`;
export const InputOTP = `
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from "{{importAliasComponents}}/pin-input";
 `;

export const InputTag = `
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from "{{importAliasComponents}}/tags-input";
`;

// TODO:custom vue password strength indicator
export const PasswordStrengthIndicator = `import { Input } from "@/components/ui/input";
import { Check, Eye, EyeOff, X } from "lucide-react";
import { useMemo, useState } from "react";
`;