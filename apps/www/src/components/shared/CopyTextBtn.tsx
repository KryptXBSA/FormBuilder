import React, { useEffect, useState } from "react";
import { HiCheck, HiClipboard } from "react-icons/hi2";

import { Button } from "@/components/ui/button";

export function CopyTextBtn({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);

	function copyCode() {
		navigator.clipboard.writeText(text);
		setCopied(true);
	}

	useEffect(() => {
		if (copied) {
			const timeout = setTimeout(() => {
				setCopied(false);
			}, 2000);

			return () => clearTimeout(timeout);
		}
	}, [copied]);

	return (
		<Button variant="ghost" className="" onClick={copyCode}>
			{copied ? <HiCheck size={24} /> : <HiClipboard size={24} />}
		</Button>
	);
}
