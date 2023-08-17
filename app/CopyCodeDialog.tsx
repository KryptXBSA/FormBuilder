import { useEffect, useState } from "react"
import { CheckIcon, ClipboardIcon } from "lucide-react"

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

  function copy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <div className="flex items-center my-3 justify-between">
          <p>Remember to format the code once you've pasted it.</p>
          <Button variant="ghost" className="" onClick={copy}>
            {copied ? (
              <CheckIcon />
            ) : (
              <>
                <ClipboardIcon size={22} />
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
