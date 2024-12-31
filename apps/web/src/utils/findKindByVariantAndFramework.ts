import { allFieldVariantsWithKinds, type FormFramework, type FrameworkFieldVariants } from "formbuilder-core";
import type { FrameworkFieldKinds } from "formbuilder-core";

export function findKindByVariantAndFramework<F extends FormFramework>(
    variant: FrameworkFieldVariants[F],
    framework: F
): FrameworkFieldKinds[F] | undefined {
    const variantMap = allFieldVariantsWithKinds[framework]; // Adjust as necessary

    for (const kind in variantMap) {
        const variants = variantMap[kind];
        // Check if any variant's value matches the provided variant's value
        if (variants.variant.some(v => v.value === variant)) {
            return kind as FrameworkFieldKinds[F];
        }
    }
    return undefined; // Return undefined if no match is found
}