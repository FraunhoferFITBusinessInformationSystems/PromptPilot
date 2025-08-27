import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export function FormToolTip({tooltipContent}:{tooltipContent: string}) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <QuestionMarkCircledIcon />
        </TooltipTrigger>
        <TooltipContent style={{ width: 400 }}>
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 