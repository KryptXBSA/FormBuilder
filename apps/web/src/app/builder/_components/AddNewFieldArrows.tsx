import { Button } from "@/components/ui/button";
import {
  ArrowBigUpDash,
  ArrowBigDownDash,
  ArrowBigLeftDash,
  ArrowBigRightDash,
} from "lucide-react";

export function AddNewFieldArrows() {
  return (
    <div className="flex h-[118px] items-center justify-between">
      <Button
        className="h-full w-[20%] rounded-r-none "
        variant="outline"
        size="icon"
      >
        <ArrowBigLeftDash className="h-6 w-6" />
      </Button>
      <div className="flex h-full w-full flex-col justify-between">
        <Button
          variant="outline"
          className="h-full w-full rounded-none"
          size="icon"
        >
          <ArrowBigUpDash className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          className="h-full w-full rounded-none"
          size="icon"
        >
          <ArrowBigDownDash className="h-6 w-6" />
        </Button>
      </div>
      <Button
        variant="outline"
        className="h-full w-[20%] rounded-l-none"
        size="icon"
      >
        <ArrowBigRightDash className="h-6 w-6" />
      </Button>
    </div>
  );
}
