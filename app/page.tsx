"use client"
import { FormBuilder } from "./FormBuilder"
import { MyForm } from "./MyForm"


export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <FormBuilder />
      {/* <MyForm/> */}
    </section>
  )
}
