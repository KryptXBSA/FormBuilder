import { Heading } from "../codegen/imports/vue/heading";
import {
    Input,
    Textarea,
    InputOTP,
    InputTag,
} from "../codegen/imports/vue/text";
import {
    phoneNumber,
    slider,
    number,
    dualSlider,
} from "../codegen/imports/vue/number";
import { switchInput } from "../codegen/imports/vue/boolean";
import { checkbox } from "../codegen/imports/vue/boolean";
import { date, daterange } from "../codegen/imports/vue/date";
import { combobox, radio, select } from "../codegen/imports/vue/enum";

import { textTemplates } from "../codegen/templates/vue/text";
import { numberTemplates } from "../codegen/templates/vue/number";
import { heading } from "../codegen/templates/vue/heading";
import { enumTemplates } from "../codegen/templates/vue/enum";
import { button } from "../codegen/templates/vue/enum/button";
import { dateTemplates } from "../codegen/templates/vue/date";
import { booleanTemplates } from "../codegen/templates/vue/boolean";
import type { ComponentConfig } from "./components";

export const VUE_COMPONENTS: ComponentConfig = {
    "vue-shadcn-heading-simple": {
        label: "Heading",
        cli: [],
        imports: Heading,
        template: heading,
    },
    "vue-shadcn-heading-anchor": {
        label: "Heading Anchor",
        cli: [],
        imports: Heading,
        template: heading,
    },
    "vue-shadcn-text-input": {
        label: "Input",
        cli: ["input"],
        imports: Input,
        template: textTemplates.input,
    },
    "vue-shadcn-text-textarea": {
        label: "Textarea",
        cli: ["textarea"],
        imports: Textarea,
        template: textTemplates.textarea,
    },
    "vue-shadcn-text-inputotp": {
        label: "Input OTP",
        cli: ["pin-input"],
        imports: InputOTP,
        template: textTemplates.inputOTP,
    },
    "vue-shadcn-text-inputtag": {
        label: "Input Tag",
        cli: ["tags-input"],
        imports: InputTag,
        template: textTemplates.inputTag,
    },
    "vue-shadcn-number-input": {
        label: "Number Input",
        cli: [],
        imports: number,
        template: numberTemplates.number,
    },
    "vue-shadcn-number-slider": {
        label: "Slider",
        cli: ["slider"],
        imports: slider,
        template: numberTemplates.slider,
    },
    "vue-shadcn-number-dualslider": {
        label: "Dual Slider",
        cli: ["dualslider"],
        imports: dualSlider,
        template: numberTemplates.dualSlider,
    },
    "vue-shadcn-number-phone": {
        label: "Phone",
        cli: ["phone"],
        imports: phoneNumber,
        template: numberTemplates.phoneNumber,
    },
    "vue-shadcn-boolean-checkbox": {
        label: "Checkbox",
        cli: ["checkbox"],
        imports: checkbox,
        template: booleanTemplates.checkbox,
    },
    "vue-shadcn-boolean-switch": {
        label: "Switch",
        cli: ["switch"],
        imports: switchInput,
        template: booleanTemplates.switchTemplate,
    },
    "vue-shadcn-date-date": {
        label: "Date Picker",
        cli: ["date"],
        imports: date,
        template: dateTemplates.date,
    },
    "vue-shadcn-date-daterange": {
        label: "Date Range Picker",
        cli: ["daterange"],
        imports: daterange,
        template: dateTemplates.daterange,
    },
    "vue-shadcn-enum-combobox": {
        label: "Combobox",
        cli: ["popover", "command"],
        imports: combobox,
        template: enumTemplates.combobox,
    },
    "vue-shadcn-enum-select": {
        label: "Select Dropdown",
        cli: ["select"],
        imports: select,
        template: enumTemplates.select,
    },
    "vue-shadcn-enum-radio": {
        label: "Radio Group",
        cli: ["radio"],
        imports: radio,
        template: enumTemplates.radio,
    },
    "vue-shadcn-enum-button": {
        label: "Button Group",
        cli: ["button"],
        imports: button,
        template: enumTemplates.button,
    },
}