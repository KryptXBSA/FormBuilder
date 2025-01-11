import { Heading } from "../codegen/imports/next/heading";
import { Input, Textarea, AutoresizeTextarea, InputOTP, InputTag, PasswordStrengthIndicator } from "../codegen/imports/next/text";
import { phoneNumber, slider, number } from "../codegen/imports/next/number";
import { switchInput } from "../codegen/imports/next/boolean";
import { checkbox } from "../codegen/imports/next/boolean";
import { date, daterange } from "../codegen/imports/next/date";
import { combobox, radio, select } from "../codegen/imports/next/enum";

export const COMPONENTS: { [key: string]: { label: string; cli: string[]; imports: string; template: string } } = {
    "next-shadcn-heading-simple": { label: "Heading", cli: [], imports: Heading, template: "" },
    "next-shadcn-heading-anchor": { label: "Heading Anchor", cli: [], imports: Heading, template: "" },
    "next-shadcn-text-input": { label: "Input", cli: ["input"], imports: Input, template: "" },
    "next-shadcn-text-textarea": { label: "Textarea", cli: ["textarea"], imports: Textarea, template: "" },
    "next-originui-text-password": { label: "Password Strength Indicator", cli: ["originui-password"], imports: PasswordStrengthIndicator, template: "" },
    "next-shadcnexpansion-text-autoresizetextarea": { label: "Auto-resizing Textarea", cli: ["shadcnexpansion-autoresizetextarea"], imports: AutoresizeTextarea, template: "" },
    "next-shadcn-text-inputotp": { label: "Input OTP", cli: ["inputotp"], imports: InputOTP, template: "" },
    "next-originui-text-inputtag": { label: "Input Tag", cli: ["originui-inputtag"], imports: InputTag, template: "" },
    "next-shadcn-number-input": { label: "Number Input", cli: [], imports: number, template: "" },
    "next-shadcn-number-slider": { label: "Slider", cli: ["slider"], imports: slider, template: "" },
    "next-shadcn-number-phone": { label: "Phone", cli: ["phone"], imports: phoneNumber, template: "" },
    "next-shadcn-boolean-checkbox": { label: "Checkbox", cli: ["checkbox"], imports: checkbox, template: "" },
    "next-shadcn-boolean-switch": { label: "Switch", cli: ["switch"], imports: switchInput, template: "" },
    "next-shadcn-date-date": { label: "Date Picker", cli: ["date"], imports: date, template: "" },
    "next-shadcn-date-daterange": { label: "Date Range Picker", cli: ["daterange"], imports: daterange, template: "" },
    "next-shadcn-enum-combobox": { label: "Combobox", cli: ["popover", "command"], imports: combobox, template: "" },
    "next-shadcn-enum-select": { label: "Select Dropdown", cli: ["select"], imports: select, template: "" },
    "next-shadcn-enum-radio": { label: "Radio Group", cli: ["radio"], imports: radio, template: "" },
    "next-shadcn-enum-button": { label: "Button Group", cli: ["button"], imports: "", template: "" },
}