export const nextFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

export const reactFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

export const vueFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

export const svelteFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

export const solidFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

export const astroFieldKinds = [
    "text",
    "number",
    "boolean",
    "date",
    "file",
    "enum",
] as const;

const textVariants = [
    { label: "Input", value: "input" },
    { label: "Textarea", value: "textarea" },
    { label: "Rich Text Editor", value: "rich-text" },
    { label: "Markdown Editor", value: "markdown" },
    { label: "Code Editor", value: "code" },
    { label: "Password Input", value: "password" },
    { label: "Auto-resizing Textarea", value: "autosize-textarea" },
    { label: "OTP Input", value: "input-otp" },
    { label: "Input Mask", value: "input-mask" }
] as const;

const numberVariants = [
    { label: "Number Input", value: "input" },
    { label: "Slider", value: "slider" },
    { label: "Rating", value: "rating" },
    { label: "OTP", value: "otp" },
    { label: "Stepper", value: "stepper" }
] as const;

const booleanVariants = [
    { label: "Checkbox", value: "checkbox" },
    { label: "Switch", value: "switch" },
    { label: "Toggle", value: "toggle" },
] as const;

const dateVariants = [
    { label: "Date Picker", value: "date" },
    { label: "Date & Time Picker", value: "datetime" },
    { label: "Time Picker", value: "time" },
    { label: "Date Range Picker", value: "daterange" },
    { label: "Calendar Picker", value: "calendar-picker" },
    { label: "Date Range Calendar", value: "date-range-picker" },
] as const;

const fileVariants = [
    { label: "Single File Upload", value: "single" },
    { label: "Multiple File Upload", value: "multiple" },
    { label: "Drag & Drop Zone", value: "drag-drop" },
    { label: "Avatar Upload", value: "avatar" },
    { label: "Image Gallery", value: "image-gallery" },
] as const;

const enumVariants = [
    { label: "Select Dropdown", value: "select" },
    { label: "Combobox", value: "combobox" },
    { label: "Radio Group", value: "radio" },
    { label: "Checkbox Group", value: "checkbox" },
    { label: "Segmented Control", value: "segmented" },
    { label: "Chips Input", value: "chips" },
] as const;

export const nextFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export const reactFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export const vueFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export const svelteFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export const solidFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export const astroFieldVariants = {
    text: textVariants,
    number: numberVariants,
    boolean: booleanVariants,
    date: dateVariants,
    file: fileVariants,
    enum: enumVariants,
} as const;

export type FrameworkFieldKinds = {
    next: typeof nextFieldKinds[number];
    react: typeof reactFieldKinds[number];
    vue: typeof vueFieldKinds[number];
    svelte: typeof svelteFieldKinds[number];
    solid: typeof solidFieldKinds[number];
    astro: typeof astroFieldKinds[number];
};

export type FrameworkFieldVariants = {
    next: (typeof nextFieldVariants)[keyof typeof nextFieldVariants][number]['value'];
    react: (typeof reactFieldVariants)[keyof typeof reactFieldVariants][number]['value'];
    vue: (typeof vueFieldVariants)[keyof typeof vueFieldVariants][number]['value'];
    svelte: (typeof svelteFieldVariants)[keyof typeof svelteFieldVariants][number]['value'];
    solid: (typeof solidFieldVariants)[keyof typeof solidFieldVariants][number]['value'];
    astro: (typeof astroFieldVariants)[keyof typeof astroFieldVariants][number]['value'];
}; 