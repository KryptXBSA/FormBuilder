export const headingVariants = [
	{ label: "Heading", value: "solid-shadcn-heading-simple" },
	{ label: "Heading Anchor", value: "solid-shadcn-heading-anchor" },
] as const;

export const textVariants = [
	{ label: "Input", value: "solid-shadcn-text-input" },
	{ label: "Textarea", value: "solid-shadcn-text-textarea" },
	{ label: "Rich Text Editor", value: "solid-shadcn-text-rich-text" },
	{ label: "Markdown Editor", value: "solid-shadcn-text-markdown" },
	{ label: "Code Editor", value: "solid-shadcn-text-code" },
	{ label: "Password Input", value: "solid-shadcn-text-password" },
	{
		label: "Auto-resizing Textarea",
		value: "solid-shadcn-text-autosize-textarea",
	},
	{ label: "OTP Input", value: "solid-shadcn-text-input-otp" },
	{ label: "Input Mask", value: "solid-shadcn-text-input-mask" },
] as const;

export const numberVariants = [
	{ label: "Number Input", value: "solid-shadcn-number-input" },
	{ label: "Slider", value: "solid-shadcn-number-slider" },
	{ label: "Rating", value: "solid-shadcn-number-rating" },
	{ label: "OTP", value: "solid-shadcn-number-otp" },
	{ label: "Stepper", value: "solid-shadcn-number-stepper" },
] as const;

export const booleanVariants = [
	{ label: "Checkbox", value: "solid-shadcn-boolean-checkbox" },
	{ label: "Switch", value: "solid-shadcn-boolean-switch" },
	{ label: "Toggle", value: "solid-shadcn-boolean-toggle" },
] as const;

export const dateVariants = [
	{ label: "Date Picker", value: "solid-shadcn-date-date" },
	{ label: "Date & Time Picker", value: "solid-shadcn-date-datetime" },
	{ label: "Time Picker", value: "solid-shadcn-date-time" },
	{ label: "Date Range Picker", value: "solid-shadcn-date-daterange" },
	{ label: "Calendar Picker", value: "solid-shadcn-date-calendar-picker" },
	{
		label: "Date Range Calendar",
		value: "solid-shadcn-date-date-range-picker",
	},
] as const;

export const fileVariants = [
	{ label: "Single File Upload", value: "solid-shadcn-file-single" },
	{ label: "Multiple File Upload", value: "solid-shadcn-file-multiple" },
	{ label: "Drag & Drop Zone", value: "solid-shadcn-file-drag-drop" },
	{ label: "Avatar Upload", value: "solid-shadcn-file-avatar" },
	{ label: "Image Gallery", value: "solid-shadcn-file-image-gallery" },
] as const;

export const enumVariants = [
	{ label: "Select Dropdown", value: "solid-shadcn-enum-select" },
	{ label: "Combobox", value: "solid-shadcn-enum-combobox" },
	{ label: "Radio Group", value: "solid-shadcn-enum-radio" },
	{ label: "Checkbox Group", value: "solid-shadcn-enum-checkbox" },
	{ label: "Segmented Control", value: "solid-shadcn-enum-segmented" },
	{ label: "Chips Input", value: "solid-shadcn-enum-chips" },
] as const;

export const solidFieldVariants = {
	heading: headingVariants,
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	file: fileVariants,
	enum: enumVariants,
} as const;
