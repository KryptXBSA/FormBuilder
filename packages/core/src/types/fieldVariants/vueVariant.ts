export const headingVariants = [
	{ label: "Heading", value: "vue-shadcn-heading-simple" },
	// { label: "Heading Anchor", value: "vue-shadcn-heading-anchor" },
] as const;

export const textVariants = [
	{ label: "Input", value: "vue-shadcn-text-input" },
	{ label: "Textarea", value: "vue-shadcn-text-textarea" },
	{ label: "Password Input", value: "vue-shadcn-text-password" },
	// { label: "Input OTP", value: "vue-shadcn-text-inputotp" },
	// { label: "Input Tag", value: "vue-shadcn-text-inputtag" },
] as const;

export const numberVariants = [
	{ label: "Number Input", value: "vue-shadcn-number-input" },
	{ label: "Slider", value: "vue-shadcn-number-slider" },
] as const;

export const booleanVariants = [
	{ label: "Checkbox", value: "vue-shadcn-boolean-checkbox" },
	{ label: "Switch", value: "vue-shadcn-boolean-switch" },
] as const;

export const dateVariants = [
	{ label: "Date Picker", value: "vue-shadcn-date-date" },
	// { label: "Date & Time Picker", value: "vue-shadcn-date-datetime" },
	// { label: "Time Picker", value: "vue-shadcn-date-time" },
	// { label: "Date Range Picker", value: "vue-shadcn-date-daterange" },
	// { label: "Calendar Picker", value: "vue-shadcn-date-calendar-picker" },
	// { label: "Date Range Calendar", value: "vue-shadcn-date-date-range-picker" },
] as const;

// export const fileVariants = [
// 	{ label: "Single File Upload", value: "vue-shadcn-file-single" },
// 	{ label: "Multiple File Upload", value: "vue-shadcn-file-multiple" },
// 	{ label: "Drag & Drop Zone", value: "vue-shadcn-file-drag-drop" },
// 	{ label: "Avatar Upload", value: "vue-shadcn-file-avatar" },
// 	{ label: "Image Gallery", value: "vue-shadcn-file-image-gallery" },
// ] as const;

export const enumVariants = [
	{ label: "Select Dropdown", value: "vue-shadcn-enum-select" },
	{ label: "Combobox", value: "vue-shadcn-enum-combobox" },
	{ label: "Radio Group", value: "vue-shadcn-enum-radio" },
] as const;

export const vueFieldVariants = {
	heading: headingVariants,
	text: textVariants,
	number: numberVariants,
	boolean: booleanVariants,
	date: dateVariants,
	// file: fileVariants,
	enum: enumVariants,
} as const;
