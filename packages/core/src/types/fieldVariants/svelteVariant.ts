export const headingVariants = [
	{ label: "Heading", value: "svelte-shadcn-heading-simple" },
	{ label: "Heading Anchor", value: "svelte-shadcn-heading-anchor" },
] as const;

export const textVariants = [
	{ label: "Input", value: "svelte-shadcn-text-input" },
	{ label: "Textarea", value: "svelte-shadcn-text-textarea" },
	{ label: "Rich Text Editor", value: "svelte-shadcn-text-rich-text" },
	{ label: "Markdown Editor", value: "svelte-shadcn-text-markdown" },
	{ label: "Code Editor", value: "svelte-shadcn-text-code" },
	{ label: "Password Input", value: "svelte-shadcn-text-password" },
	{
		label: "Auto-resizing Textarea",
		value: "svelte-shadcn-text-autosize-textarea",
	},
	{ label: "OTP Input", value: "svelte-shadcn-text-input-otp" },
	{ label: "Input Mask", value: "svelte-shadcn-text-input-mask" },
] as const;

export const numberVariants = [
	{ label: "Number Input", value: "svelte-shadcn-number-input" },
	{ label: "Slider", value: "svelte-shadcn-number-slider" },
	{ label: "Rating", value: "svelte-shadcn-number-rating" },
	{ label: "OTP", value: "svelte-shadcn-number-otp" },
	{ label: "Stepper", value: "svelte-shadcn-number-stepper" },
] as const;

export const booleanVariants = [
	{ label: "Checkbox", value: "svelte-shadcn-boolean-checkbox" },
	{ label: "Switch", value: "svelte-shadcn-boolean-switch" },
	{ label: "Toggle", value: "svelte-shadcn-boolean-toggle" },
] as const;

export const dateVariants = [
	{ label: "Date Picker", value: "svelte-shadcn-date-date" },
	{ label: "Date & Time Picker", value: "svelte-shadcn-date-datetime" },
	{ label: "Time Picker", value: "svelte-shadcn-date-time" },
	{ label: "Date Range Picker", value: "svelte-shadcn-date-daterange" },
	{ label: "Calendar Picker", value: "svelte-shadcn-date-calendar-picker" },
	{
		label: "Date Range Calendar",
		value: "svelte-shadcn-date-date-range-picker",
	},
] as const;

export const fileVariants = [
	{ label: "Single File Upload", value: "svelte-shadcn-file-single" },
	{ label: "Multiple File Upload", value: "svelte-shadcn-file-multiple" },
	{ label: "Drag & Drop Zone", value: "svelte-shadcn-file-drag-drop" },
	{ label: "Avatar Upload", value: "svelte-shadcn-file-avatar" },
	{ label: "Image Gallery", value: "svelte-shadcn-file-image-gallery" },
] as const;

export const enumVariants = [
	{ label: "Select Dropdown", value: "svelte-shadcn-enum-select" },
	{ label: "Combobox", value: "svelte-shadcn-enum-combobox" },
	{ label: "Radio Group", value: "svelte-shadcn-enum-radio" },
	{ label: "Checkbox Group", value: "svelte-shadcn-enum-checkbox" },
	{ label: "Segmented Control", value: "svelte-shadcn-enum-segmented" },
	{ label: "Chips Input", value: "svelte-shadcn-enum-chips" },
] as const;

export const svelteFieldVariants = {
	heading: headingVariants,
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;
