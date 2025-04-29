import { Heading } from "../codegen/imports/svelte/heading";
import { Input, Textarea, InputOTP } from "../codegen/imports/svelte/text";
import {
	phoneNumber,
	slider,
	number,
	dualSlider,
} from "../codegen/imports/svelte/number";
import { switchInput } from "../codegen/imports/svelte/boolean";
import { checkbox } from "../codegen/imports/svelte/boolean";
import { date, daterange } from "../codegen/imports/svelte/date";
import {
	button,
	combobox,
	radio,
	select,
} from "../codegen/imports/svelte/enum";
import { PasswordStrengthIndicator } from "../codegen/imports/svelte/text";

import { textTemplates } from "../codegen/templates/svelte/text";
import { numberTemplates } from "../codegen/templates/svelte/number";
import { enumTemplates } from "../codegen/templates/svelte/enum";
import { dateTemplates } from "../codegen/templates/svelte/date";
import { booleanTemplates } from "../codegen/templates/svelte/boolean";
import type { ComponentConfig } from "./components";
import { headingTemplates } from "../codegen/templates/svelte/heading";

export const SVELTE_COMPONENTS: ComponentConfig = {
	"svelte-divider-start": {
		label: "",
		cli: [],
		imports: "",
		template: `
		<div class="grid grid-cols-1 md:grid-cols-{{rowLength}} gap-6">
		`,
	},
	"svelte-divider-end": {
		label: "",
		cli: [],
		imports: "",
		template: `
		</div>
		`,
	},
	"svelte-shadcn-heading-simple": {
		label: "Heading",
		cli: [],
		imports: "",
		template: headingTemplates.headingWithoutAnchor,
	},
	"svelte-shadcn-heading-anchor": {
		label: "Heading Anchor",
		cli: [],
		imports: "",
		template: headingTemplates.headingWithAnchor,
	},
	"svelte-shadcn-text-input": {
		label: "Input",
		cli: ["input"],
		imports: Input,
		template: textTemplates.input,
	},
	"svelte-shadcn-text-textarea": {
		label: "Textarea",
		cli: ["textarea"],
		imports: Textarea,
		template: textTemplates.textarea,
	},
	"svelte-shadcn-text-inputotp": {
		label: "Input OTP",
		cli: ["input-otp"],
		imports: InputOTP,
		template: textTemplates.inputOTP,
	},
	// "svelte-shadcn-text-inputtag": {
	// 	label: "Input Tag",
	// 	cli: ["tags-input"],
	// 	imports: InputTag,
	// 	template: textTemplates.inputTag,
	// },
	"svelte-shadcn-text-password": {
		label: "Password Input",
		cli: [""],
		imports: PasswordStrengthIndicator,
		template: textTemplates.password,
	},
	"svelte-shadcn-number-input": {
		label: "Number Input",
		cli: [],
		imports: number,
		template: numberTemplates.number,
	},
	"svelte-shadcn-number-slider": {
		label: "Slider",
		cli: ["slider"],
		imports: slider,
		template: numberTemplates.slider,
	},
	"svelte-shadcn-number-phone": {
		label: "Phone",
		cli: ["phone"],
		imports: phoneNumber,
		template: numberTemplates.phoneNumber,
	},
	"svelte-shadcn-boolean-checkbox": {
		label: "Checkbox",
		cli: ["checkbox"],
		imports: checkbox,
		template: booleanTemplates.checkbox,
	},
	"svelte-shadcn-boolean-switch": {
		label: "Switch",
		cli: ["switch"],
		imports: switchInput,
		template: booleanTemplates.switchTemplate,
	},
	"svelte-shadcn-date-date": {
		label: "Date Picker",
		cli: ["popover", "calendar"],
		imports: date,
		template: dateTemplates.date,
	},
	"svelte-shadcn-date-daterange": {
		label: "Date Range Picker",
		cli: ["daterange"],
		imports: daterange,
		template: dateTemplates.daterange,
	},
	"svelte-shadcn-enum-combobox": {
		label: "Combobox",
		cli: ["popover", "command"],
		imports: combobox,
		template: enumTemplates.combobox,
	},
	"svelte-shadcn-enum-select": {
		label: "Select Dropdown",
		cli: ["select"],
		imports: select,
		template: enumTemplates.select,
	},
	"svelte-shadcn-enum-radio": {
		label: "Radio Group",
		cli: ["radio-group"],
		imports: radio,
		template: enumTemplates.radio,
	},
	"svelte-shadcn-enum-button": {
		label: "Button Group",
		cli: ["button"],
		imports: button,
		template: enumTemplates.button,
	},
};
