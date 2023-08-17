import { FormField } from "@/schema"
type DuplicateType = "key" | "enum";

export type DuplicateResult = {
  hasDuplicates: boolean;
  duplicates: {
    [type in DuplicateType]: string[];
  };
};

export function checkDuplicates(fields: FormField[]): DuplicateResult {
  const keysSet = new Set<string>();
  const enumNamesSet = new Set<string>();
  const duplicateKeys: string[] = [];
  const duplicateEnumNames: string[] = [];

  for (const field of fields) {
    if (field.key && keysSet.has(field.key)) {
      duplicateKeys.push(field.key);
    } else {
      keysSet.add(field.key);
    }

    if (field.enumName && enumNamesSet.has(field.enumName)) {
      duplicateEnumNames.push(field.enumName);
    } else {
      enumNamesSet.add(field.enumName!);
    }
  }

  return {
    hasDuplicates: duplicateKeys.length > 0 || duplicateEnumNames.length > 0,
    duplicates: {
      key: duplicateKeys,
      enum: duplicateEnumNames,
    },
  };
}
