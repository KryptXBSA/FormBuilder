"use server"

import { permanentRedirect } from "next/navigation";

 
export default async function Page() {
  await redirect()
	return <div>redirect</div>;
}
 
export async function redirect() {
  permanentRedirect("https://formbuilder.kryptxbsa.com") 
}