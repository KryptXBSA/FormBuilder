import { useEffect, useState } from "react"
import { generateCode } from "@/codegen/generate-code"
import { FormSchema } from "@/schema"
import { useAppState } from "@/state/state"
import { checkDuplicates } from "@/utils/checkDuplicates"
import { useFormContext } from "react-hook-form"
import { HiCheck, HiClipboard } from "react-icons/hi2"

import { getRequiredComponents } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

export function CopyCodeDialog() {
  const form = useFormContext<FormSchema>()
  const { toast } = useToast()

  const [generatedCode, setGeneratedCode] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [copiedRequired, setCopiedRequired] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)


  let state = useAppState()
  let selectedForm = state.forms[state.selectedForm]

  let requiredComponents = "npx shadcn-ui@latest add "
  for (let i of getRequiredComponents(selectedForm.fields)) {
    requiredComponents += i + " "
  }

  function copyCode() {
    navigator.clipboard.writeText(generatedCode)
    setCopiedCode(true)
  }

  function copyRequired() {
    navigator.clipboard.writeText(requiredComponents)
    setCopiedRequired(true)
  }

  useEffect(() => {
    if (copiedCode) {
      const timeout = setTimeout(() => {
        setCopiedCode(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
    if (copiedRequired) {
      const timeout = setTimeout(() => {
        setCopiedRequired(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [copiedCode, copiedRequired])

  function showCodeDialog() {
    // validating that the form has more than one field
    if (form.getValues("fields").length === 0) {
      toast({
        variant: "destructive",
        title: "Form has 0 Fields",
      })
      return
    }
    const result = checkDuplicates(form.getValues("fields"))
    if (result.hasDuplicates) {
      if (result.duplicates.key.length > 0)
        toast({
          variant: "destructive",
          title: "Duplicate Keys found",
          description: result.duplicates.key.toString(),
        })
      if (result.duplicates.enum.length > 0)
        toast({
          variant: "destructive",
          title: "Duplicate Enum Names found",
          description: result.duplicates.enum.toString(),
        })
    } else {
      setDialogOpen(true)
      const code = generateCode(form.getValues())
      setGeneratedCode(code)
    }
  }

  return (
    <Dialog onOpenChange={setDialogOpen} open={dialogOpen}>
      <DialogTrigger>
        <Button variant="secondary" onClick={showCodeDialog}>
          Generate Code
        </Button>
      </DialogTrigger>
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
          <Button variant="ghost" className="" onClick={copyCode}>
            {copiedCode ? (
              <HiCheck size={24} />
            ) : (
              <>
                <HiClipboard size={24} />
              </>
            )}
          </Button>
        </div>
        <div className="h-[500px] overflow-auto">
          <pre>{generatedCode}</pre>
        </div>
      </DialogContent>
    </Dialog>
  )
}
