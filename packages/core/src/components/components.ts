import { Heading } from "../codegen/imports/next/heading";
import {
	Input,
	Textarea,
	AutoresizeTextarea,
	InputOTP,
	InputTag,
	PasswordStrengthIndicator,
} from "../codegen/imports/next/text";
import {
	phoneNumber,
	slider,
	number,
	dualSlider,
} from "../codegen/imports/next/number";
import { switchInput } from "../codegen/imports/next/boolean";
import { checkbox } from "../codegen/imports/next/boolean";
import { date, daterange } from "../codegen/imports/next/date";
import { combobox, radio, select } from "../codegen/imports/next/enum";
import { textTemplates } from "../codegen/templates/next/text";
import { numberTemplates } from "../codegen/templates/next/number";
import { heading } from "../codegen/templates/next/heading";
import { enumTemplates } from "../codegen/templates/next/enum";
import { button } from "../codegen/templates/next/enum/button";
import { dateTemplates } from "../codegen/templates/next/date";
import { booleanTemplates } from "../codegen/templates/next/boolean";

export const COMPONENTS: {
	[key: string]: {
		label: string;
		cli: string[];
		imports: string;
		template: string;
	};
} = {
	"next-shadcn-heading-simple": {
		label: "Heading",
		cli: [],
		imports: Heading,
		template: heading,
	},
	"next-shadcn-heading-anchor": {
		label: "Heading Anchor",
		cli: [],
		imports: Heading,
		template: heading,
	},
	"next-shadcn-text-input": {
		label: "Input",
		cli: ["input"],
		imports: Input,
		template: textTemplates.input,
	},
	"next-shadcn-text-textarea": {
		label: "Textarea",
		cli: ["textarea"],
		imports: Textarea,
		template: textTemplates.textarea,
	},
	"next-originui-text-password": {
		label: "Password Strength Indicator",
		cli: ["originui-password"],
		imports: PasswordStrengthIndicator,
		template: textTemplates.passwordStrengthIndicator,
	},
	"next-shadcnexpansion-text-autoresizetextarea": {
		label: "Auto-resizing Textarea",
		cli: ["shadcnexpansion-autoresizetextarea"],
		imports: AutoresizeTextarea,
		template: textTemplates.autoResizeTextarea,
	},
	"next-shadcn-text-inputotp": {
		label: "Input OTP",
		cli: ["inputotp"],
		imports: InputOTP,
		template: textTemplates.inputOTP,
	},
	"next-originui-text-inputtag": {
		label: "Input Tag",
		cli: ["originui-inputtag"],
		imports: InputTag,
		template: textTemplates.inputTag,
	},
	"next-shadcn-number-input": {
		label: "Number Input",
		cli: [],
		imports: number,
		template: numberTemplates.number,
	},
	"next-shadcn-number-slider": {
		label: "Slider",
		cli: ["slider"],
		imports: slider,
		template: numberTemplates.slider,
	},
	"next-shadcn-number-dualslider": {
		label: "Dual Slider",
		cli: ["dualslider"],
		imports: dualSlider,
		template: numberTemplates.dualSlider,
	},
	"next-shadcn-number-phone": {
		label: "Phone",
		cli: ["phone"],
		imports: phoneNumber,
		template: numberTemplates.phoneNumber,
	},
	"next-shadcn-boolean-checkbox": {
		label: "Checkbox",
		cli: ["checkbox"],
		imports: checkbox,
		template: booleanTemplates.checkbox,
	},
	"next-shadcn-boolean-switch": {
		label: "Switch",
		cli: ["switch"],
		imports: switchInput,
		template: booleanTemplates.switchTemplate,
	},
	"next-shadcn-date-date": {
		label: "Date Picker",
		cli: ["date"],
		imports: date,
		template: dateTemplates.date,
	},
	"next-shadcn-date-daterange": {
		label: "Date Range Picker",
		cli: ["daterange"],
		imports: daterange,
		template: dateTemplates.daterange,
	},
	"next-shadcn-enum-combobox": {
		label: "Combobox",
		cli: ["popover", "command"],
		imports: combobox,
		template: enumTemplates.combobox,
	},
	"next-shadcn-enum-select": {
		label: "Select Dropdown",
		cli: ["select"],
		imports: select,
		template: enumTemplates.select,
	},
	"next-shadcn-enum-radio": {
		label: "Radio Group",
		cli: ["radio"],
		imports: radio,
		template: enumTemplates.radio,
	},
	"next-shadcn-enum-button": {
		label: "Button Group",
		cli: ["button"],
		imports: button,
		template: enumTemplates.button,
	},
};
