"use client"

import React, { useEffect, useState } from "react"
import { useAppState } from "@/state/state"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { FormBuilder } from "./FormBuilder"
import { FormList } from "./FormList"
import { FormName } from "./FormName"
import { Preview } from "./Preview"

export default function IndexPage() {
  const [loaded, setLoaded] = useState(false)
  let appState = useAppState()
  useEffect(() => {
    let state = localStorage.getItem("state")!
    appState.setAppState(JSON.parse(state!))
    setLoaded(true)
  }, [])
  if (!loaded) return <></>
  return (
    <section className="mx-auto max-w-[1500px]  py-10">
      <div className="flex gap-6 w-full">
        <FormList />
        <Tabs defaultValue="editor" className="w-full">
          <FormName />
          <TabsList className="grid w-1/2 mx-aut grid-cols-2">
            <TabsTrigger value="editor">Editor</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="editor">
            <FormBuilder />
          </TabsContent>
          <TabsContent value="preview">
            <Preview />
          </TabsContent>
        </Tabs>
      </div>
      {/* <div className="w-1/2"> */}
      {/* <MyForm/> */}
      {/* </div> */}
    </section>
  )
}
