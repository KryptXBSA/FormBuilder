import * as React from "react";
import { H1, H2, H3, H4, H5, H6 } from "@/components/ui/heading-with-anchor";

interface HeadingProps {
	useAnchor: boolean;
	headingLevel: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
	anchorValue?: string;
	label: string;
}

// TODO: Heading not done
export function Heading({
	useAnchor,
	headingLevel,
	label,
	anchorValue,
}: HeadingProps) {
	const HeadingComponent = {
		H1: H1,
		H2: H2,
		H3: H3,
		H4: H4,
		H5: H5,
		H6: H6,
	}[headingLevel || "H1"];

	return (
		<>
			{useAnchor ? (
				<HeadingComponent className="order-b-2" anchor={anchorValue}>
					{label}
				</HeadingComponent>
			) : (
				<HeadingComponent className="order-b-2">{label}</HeadingComponent>
			)}
		</>
	);
}
