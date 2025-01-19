import React from "react";
import {
	InputOTP,
	AutoResizeTextarea,
	Input,
	Textarea,
	InputTag,
	PasswordStrengthIndicator,
} from "./component-variants/text";
import { Heading } from "./component-variants/heading/Heading";
import { DualSlider } from "./component-variants/number/dual-slider";
import { NumberInput } from "./component-variants/number/number";
import { PhoneNumber } from "./component-variants/number/phone-number";
import { Checkbox } from "./component-variants/boolean/checkbox";
import { Switch } from "./component-variants/boolean/switch";
import { DatePicker } from "./component-variants/date/date";
import { DateRangePicker } from "./component-variants/date/daterange";
import { Combobox } from "./component-variants/enum/combobox";
import { Select } from "./component-variants/enum/select";
import { RadioGroup } from "./component-variants/enum/radio";
import { ButtonGroup } from "./component-variants/enum/button";
import type { FormField as FF, FormFramework } from "formbuilder-core";

export function RenderField({ col }: { col: FF<FormFramework> }) {
	const variant = col.variant.split("-").slice(2).join("-");
	console.log("col.variant", variant);
	switch (col.kind) {
		case "heading":
			if (variant === "heading-simple") {
				return (
					<Heading
						label={col.label}
						useAnchor={false}
						headingLevel={col.headingLevel!}
					/>
				);
			}
			if (variant === "heading-anchor") {
				return (
					<Heading
						label={col.label}
						anchorValue="azaz"
						useAnchor={true}
						headingLevel={col.headingLevel!}
					/>
				);
			}
			break;
		case "text":
			switch (variant) {
				case "text-input":
					return <Input f={col} />;
				case "text-textarea":
					return <Textarea f={col} />;
				case "text-autoresizetextarea":
					return <AutoResizeTextarea f={col} />;
				case "text-inputotp":
					return <InputOTP f={col} />;
				case "text-inputtag":
					return <InputTag f={col} />;
				case "text-password":
					return <PasswordStrengthIndicator f={col} />;
			}
			break;
		case "number":
			switch (variant) {
				case "number-input":
					return <NumberInput f={col} />;
				case "number-phone":
					return <PhoneNumber f={col} />;
				case "number-slider":
					return <DualSlider f={col} />;
			}
			break;
		case "boolean":
			if (variant === "boolean-checkbox") {
				return <Checkbox f={col} />;
			}
			if (variant === "boolean-switch") {
				return <Switch f={col} />;
			}
			break;
		case "date":
			if (variant === "date-date") {
				return <DatePicker f={col} />;
			}
			if (variant === "date-daterange") {
				return <DateRangePicker f={col} />;
			}
			break;
		case "enum":
			switch (variant) {
				case "enum-combobox":
					return <Combobox f={col} />;
				case "enum-select":
					return <Select f={col} />;
				case "enum-radio":
					return <RadioGroup f={col} />;
				case "enum-button":
					return <ButtonGroup f={col} />;
			}
			break;
		default:
			return null;
	}
}
