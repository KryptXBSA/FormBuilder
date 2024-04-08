import { Dispatch, SetStateAction } from "react"
import { generateCode } from "@/codegen/generate-code"
import { FormSchema } from "@/schema"
import { checkDuplicates } from "@/utils/checkDuplicates"
import { UseFormReturn, useFormContext } from "react-hook-form"

import { useToast } from "@/components/ui/use-toast"

type ShowCodeDialogProps = {
  setDialogOpen: Dispatch<SetStateAction<boolean>>
  setGeneratedCode: Dispatch<SetStateAction<string>>
  toast: any
}

export function useCodeViewDialog({
  setGeneratedCode,
  toast,
  setDialogOpen,
}: ShowCodeDialogProps) {
  const form = useFormContext<FormSchema>()

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