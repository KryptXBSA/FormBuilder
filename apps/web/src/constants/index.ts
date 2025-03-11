export const colorMap: Record<string, { label: string; border: string }> = {
	// TODO: fix heading color
	heading: { label: "text-white", border: "border-white" },
	text: { label: "text-green-500", border: "border-green-500" },
	number: { label: "text-blue-500", border: "border-blue-500" },
	boolean: { label: "text-red-500", border: "border-red-500" },
	date: { label: "text-yellow-500", border: "border-yellow-500" },
	file: { label: "text-purple-500", border: "border-purple-500" },
	enum: { label: "text-orange-500", border: "border-orange-500" },
};

export const LOCALSTORAGE_KEY = "state-v0.7.0";

export const IGNORED_CLI_COMPONENTS = [
	// "originui-password",
	"originui-inputtag",
	"shadcnexpansion-autoresizetextarea",
	"shadcnexpansion-dualslider",
	"phone",
];
