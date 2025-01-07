export const headingVariants = [
    { label: "Heading", value: "next-shadcn-heading-simple" },
    { label: "Heading Anchor", value: "next-shadcn-heading-anchor" },
] as const;

export const textVariants = [
    { label: "Input", value: "next-shadcn-text-input" },
    { label: "Textarea", value: "next-shadcn-text-textarea" },
    // { label: "Rich Text Editor", value: "next-shadcn-text-rich-text" },
    // { label: "Markdown Editor", value: "next-shadcn-text-markdown" },
    // { label: "Code Editor", value: "next-shadcn-text-code" },
    { label: "Password Strength Indicator", value: "next-originui-text-password" },
    { label: "Auto-resizing Textarea", value: "next-shadcnexpansion-text-autoresizetextarea" },
    { label: "Input OTP", value: "next-shadcn-text-inputotp" },
    // { label: "Input Mask", value: "next-shadcn-text-input-mask" },
    { label: "Input Tag", value: "next-originui-text-inputtag" }
] as const;

export const numberVariants = [
    { label: "Number Input", value: "next-shadcn-number-input" },
    { label: "Slider", value: "next-shadcn-number-slider" },
    { label: "Phone", value: "next-shadcn-number-phone" },
    // { label: "Rating", value: "next-shadcn-number-rating" },
    // { label: "OTP", value: "next-shadcn-number-otp" },
    // { label: "Stepper", value: "next-shadcn-number-stepper" }
] as const;

export const booleanVariants = [
    { label: "Checkbox", value: "next-shadcn-boolean-checkbox" },
    { label: "Switch", value: "next-shadcn-boolean-switch" },
] as const;

export const dateVariants = [
    { label: "Date Picker", value: "next-shadcn-date-date" },
    { label: "Date Range Picker", value: "next-shadcn-date-daterange" }
] as const;

export const fileVariants = [
    { label: "Single File Upload", value: "next-shadcn-file-single" },
    { label: "Multiple File Upload", value: "next-shadcn-file-multiple" },
    { label: "Drag & Drop Zone", value: "next-shadcn-file-drag-drop" },
    { label: "Avatar Upload", value: "next-shadcn-file-avatar" },
    { label: "Image Gallery", value: "next-shadcn-file-image-gallery" },
] as const;

export const enumVariants = [
    { label: "Select Dropdown", value: "next-shadcn-enum-select" },
    { label: "Combobox", value: "next-shadcn-enum-combobox" },
    { label: "Radio Group", value: "next-shadcn-enum-radio" },
    { label: "Checkbox Group", value: "next-shadcn-enum-checkbox" },
    { label: "Segmented Control", value: "next-shadcn-enum-segmented" },
    { label: "Chips Input", value: "next-shadcn-enum-chips" },
] as const;

export const nextFieldVariants = {
    heading: headingVariants,
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const; 