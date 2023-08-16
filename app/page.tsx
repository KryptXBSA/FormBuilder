"use client"
import { useState } from "react"
import { FormBuilder } from "./FormBuilder"


export default function IndexPage() {
  const [code, setCode] = useState("aaa")
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <FormBuilder />
    </section>
  )
}
