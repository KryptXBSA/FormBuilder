export const textVariants = [
    { label: "Input", value: "react-shadcn-text-input" },
    { label: "Textarea", value: "react-shadcn-text-textarea" },
    { label: "Rich Text Editor", value: "react-shadcn-text-rich-text" },
    { label: "Markdown Editor", value: "react-shadcn-text-markdown" },
    { label: "Code Editor", value: "react-shadcn-text-code" },
    { label: "Password Input", value: "react-shadcn-text-password" },
    { label: "Auto-resizing Textarea", value: "react-shadcn-text-autosize-textarea" },
    { label: "OTP Input", value: "react-shadcn-text-input-otp" },
    { label: "Input Mask", value: "react-shadcn-text-input-mask" }
] as const;

export const numberVariants = [
    { label: "Number Input", value: "react-shadcn-number-input" },
    { label: "Slider", value: "react-shadcn-number-slider" },
    { label: "Rating", value: "react-shadcn-number-rating" },
    { label: "OTP", value: "react-shadcn-number-otp" },
    { label: "Stepper", value: "react-shadcn-number-stepper" }
] as const;

export const booleanVariants = [
    { label: "Checkbox", value: "react-shadcn-boolean-checkbox" },
    { label: "Switch", value: "react-shadcn-boolean-switch" },
    { label: "Toggle", value: "react-shadcn-boolean-toggle" },
] as const;

export const dateVariants = [
    { label: "Date Picker", value: "react-shadcn-date-date" },
    { label: "Date & Time Picker", value: "react-shadcn-date-datetime" },
    { label: "Time Picker", value: "react-shadcn-date-time" },
    { label: "Date Range Picker", value: "react-shadcn-date-daterange" },
    { label: "Calendar Picker", value: "react-shadcn-date-calendar-picker" },
    { label: "Date Range Calendar", value: "react-shadcn-date-date-range-picker" },
] as const;

export const fileVariants = [
    { label: "Single File Upload", value: "react-shadcn-file-single" },
    { label: "Multiple File Upload", value: "react-shadcn-file-multiple" },
    { label: "Drag & Drop Zone", value: "react-shadcn-file-drag-drop" },
    { label: "Avatar Upload", value: "react-shadcn-file-avatar" },
    { label: "Image Gallery", value: "react-shadcn-file-image-gallery" },
] as const;

export const enumVariants = [
    { label: "Select Dropdown", value: "react-shadcn-enum-select" },
    { label: "Combobox", value: "react-shadcn-enum-combobox" },
    { label: "Radio Group", value: "react-shadcn-enum-radio" },
    { label: "Checkbox Group", value: "react-shadcn-enum-checkbox" },
    { label: "Segmented Control", value: "react-shadcn-enum-segmented" },
    { label: "Chips Input", value: "react-shadcn-enum-chips" },
] as const;

export const reactFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const; 