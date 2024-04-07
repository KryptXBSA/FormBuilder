import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function NewVersionDialog({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (v: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Version Coming Soon</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Version 1 of FormBuilder is on its way! Stay tuned for exciting
          new features and improvements.
        </DialogDescription>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
