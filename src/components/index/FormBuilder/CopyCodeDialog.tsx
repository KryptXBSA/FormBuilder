import { useEffect, useState } from "react"
import { useAppState } from "@/state/state"
import { HiCheck, HiClipboard } from "react-icons/hi2"

import { getRequiredComponents } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function CopyCodeDialog({
  open,
  setOpen,
  code,
}: {
  setOpen: (a: boolean) => void
  open: boolean
  code: string
}) {
  const [copied, setCopied] = useState(false)
  const [copiedRequired, setCopiedRequired] = useState(false)
  let data = useAppState()
  let form = data.forms[data.selectedForm]
  let requiredComponents = "npx shadcn-ui@latest add "
  for (let i of getRequiredComponents(form.fields)) {
    requiredComponents += i + " "
  }

  function copy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }
  function copyRequired() {
    navigator.clipboard.writeText(requiredComponents)
    setCopiedRequired(true)
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
    if (copiedRequired) {
      const timeout = setTimeout(() => {
        setCopiedRequired(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [copied, copiedRequired])

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="max-w-2xl">
        <p>Required Components:</p>

        <div className="border-border flex items-center justify-between border-2 rounded-lg p-1">
          <p className="ml-1">{requiredComponents}</p>

          <Button variant="ghost" className="" onClick={copyRequired}>
            {copiedRequired ? (
              <HiCheck size={24} />
            ) : (
              <>
                <HiClipboard size={24} />
              </>
            )}
          </Button>
        </div>
        <div className="flex items-center my-3 justify-between">
          <p>Remember to format the code once you've pasted it.</p>
          <Button variant="ghost" className="" onClick={copy}>
            {copied ? (
              <HiCheck size={24} />
            ) : (
              <>
                <HiClipboard size={24} />
              </>
            )}
          </Button>
        </div>
        <div className="h-[500px] overflow-auto">
          <pre>{code}</pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}
