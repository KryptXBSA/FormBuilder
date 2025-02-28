export const headingVariants = [
	{ label: "Heading", value: "svelte-shadcn-heading-simple" },
	{ label: "Heading Anchor", value: "svelte-shadcn-heading-anchor" },
] as const;

export const textVariants = [
	{ label: "Input", value: "svelte-shadcn-text-input" },
	{ label: "Textarea", value: "svelte-shadcn-text-textarea" },
	{ label: "Password Input", value: "svelte-shadcn-text-password" },
	{ label: "OTP Input", value: "svelte-shadcn-text-inputotp" },
] as const;

export const numberVariants = [
	{ label: "Number Input", value: "svelte-shadcn-number-input" },
	{ label: "Slider", value: "svelte-shadcn-number-slider" },
] as const;

export const booleanVariants = [
	{ label: "Checkbox", value: "svelte-shadcn-boolean-checkbox" },
	{ label: "Switch", value: "svelte-shadcn-boolean-switch" },
	{ label: "Toggle", value: "svelte-shadcn-boolean-toggle" },
] as const;

export const dateVariants = [
	{ label: "Date Picker", value: "svelte-shadcn-date-date" },
	{ label: "Date Range Picker", value: "svelte-shadcn-date-daterange" },
] as const;

// export const fileVariants = [
// 	{ label: "Single File Upload", value: "svelte-shadcn-file-single" },
// 	{ label: "Multiple File Upload", value: "svelte-shadcn-file-multiple" },
// 	{ label: "Drag & Drop Zone", value: "svelte-shadcn-file-drag-drop" },
// 	{ label: "Avatar Upload", value: "svelte-shadcn-file-avatar" },
// 	{ label: "Image Gallery", value: "svelte-shadcn-file-image-gallery" },
// ] as const;

export const enumVariants = [
	{ label: "Combobox", value: "svelte-shadcn-enum-combobox" },
	{ label: "Select Dropdown", value: "svelte-shadcn-enum-select" },
	{ label: "Radio Group", value: "svelte-shadcn-enum-radio" },
	// { label: "Button Group", value: "svelte-shadcn-enum-button" },
] as const;

export const svelteFieldVariants = {
	heading: headingVariants,
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	// file: fileVariants,
	enum: enumVariants,
} as const;
