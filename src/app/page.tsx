"use server";

import { permanentRedirect } from "next/navigation";

export default async function Page() {
	await permanentRedirect("https://formbuilder.kryptxbsa.com");
	return <div>redirect</div>;
}
