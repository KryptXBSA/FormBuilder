import { textarea } from "./textarea";
import { autoResizeTextarea } from "./autoresize-textarea";
import { inputOTP } from "./input-otp";
import { inputTag } from "./input-tag";
import { input } from "./input";
import { passwordStrengthIndicator } from "./password-strength-indicator";
import { password } from "./password";

export const textTemplates = {
	textarea,
	autoResizeTextarea,
	inputOTP,
	inputTag,
	input,
	passwordStrengthIndicator,
	password
} as const;
