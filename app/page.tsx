"use client"

import { FormBuilder } from "./FormBuilder"
import { FormList } from "./FormList"
import { FormName } from "./FormName"
import { MyForm } from "./MyForm"

export default function IndexPage() {
  return (
    <section className="mx-auto max-w-[1500px]  py-10">
      <div className="flex gap-6 w-full">
        <FormList />
        <FormBuilder />
      </div>
      {/* <div className="w-1/2"> */}
      {/* <MyForm/> */}
      {/* </div> */}
    </section>
  )
}
