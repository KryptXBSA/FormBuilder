"use client"

import { useEffect, useState } from "react"

import { FormBuilder } from "./FormBuilder"
import { FormList } from "./FormList"

export default function IndexPage() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!loaded) return <></>
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
