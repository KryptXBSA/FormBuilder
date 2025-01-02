export const headingVariants = [
    { label: "Heading", value: "astro-shadcn-heading-simple" },
    { label: "Heading Anchor", value: "astro-shadcn-heading-anchor" },
] as const;

export const textVariants = [
    { label: "Input", value: "astro-shadcn-text-input" },
    { label: "Textarea", value: "astro-shadcn-text-textarea" },
    { label: "Rich Text Editor", value: "astro-shadcn-text-rich-text" },
    { label: "Markdown Editor", value: "astro-shadcn-text-markdown" },
    { label: "Code Editor", value: "astro-shadcn-text-code" },
    { label: "Password Input", value: "astro-shadcn-text-password" },
    { label: "Auto-resizing Textarea", value: "astro-shadcn-text-autosize-textarea" },
    { label: "OTP Input", value: "astro-shadcn-text-input-otp" },
    { label: "Input Mask", value: "astro-shadcn-text-input-mask" }
] as const;

export const numberVariants = [
    { label: "Number Input", value: "astro-shadcn-number-input" },
    { label: "Slider", value: "astro-shadcn-number-slider" },
    { label: "Rating", value: "astro-shadcn-number-rating" },
    { label: "OTP", value: "astro-shadcn-number-otp" },
    { label: "Stepper", value: "astro-shadcn-number-stepper" }
] as const;

export const booleanVariants = [
    { label: "Checkbox", value: "astro-shadcn-boolean-checkbox" },
    { label: "Switch", value: "astro-shadcn-boolean-switch" },
    { label: "Toggle", value: "astro-shadcn-boolean-toggle" },
] as const;

export const dateVariants = [
    { label: "Date Picker", value: "astro-shadcn-date-date" },
    { label: "Date & Time Picker", value: "astro-shadcn-date-datetime" },
    { label: "Time Picker", value: "astro-shadcn-date-time" },
    { label: "Date Range Picker", value: "astro-shadcn-date-daterange" },
    { label: "Calendar Picker", value: "astro-shadcn-date-calendar-picker" },
    { label: "Date Range Calendar", value: "astro-shadcn-date-date-range-picker" },
] as const;

export const fileVariants = [
    { label: "Single File Upload", value: "astro-shadcn-file-single" },
    { label: "Multiple File Upload", value: "astro-shadcn-file-multiple" },
    { label: "Drag & Drop Zone", value: "astro-shadcn-file-drag-drop" },
    { label: "Avatar Upload", value: "astro-shadcn-file-avatar" },
    { label: "Image Gallery", value: "astro-shadcn-file-image-gallery" },
] as const;

export const enumVariants = [
    { label: "Select Dropdown", value: "astro-shadcn-enum-select" },
    { label: "Combobox", value: "astro-shadcn-enum-combobox" },
    { label: "Radio Group", value: "astro-shadcn-enum-radio" },
    { label: "Checkbox Group", value: "astro-shadcn-enum-checkbox" },
    { label: "Segmented Control", value: "astro-shadcn-enum-segmented" },
    { label: "Chips Input", value: "astro-shadcn-enum-chips" },
] as const;

export const astroFieldVariants = {
    heading: headingVariants,
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const; 