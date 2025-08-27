'use client';

import { ControllerRenderProps } from 'react-hook-form';
import * as React from 'react';
import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Button } from '../button';
import { format } from "date-fns"
import { cn } from '@/lib/utils';
import { CalendarIcon,QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { Calendar } from '../calendar';
import { SelectSingleEventHandler } from 'react-day-picker';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FormToolTip } from './form-tooltip';

export default function FormDatePicker({
  label,
  tooltip,
  value,
  required,
  onChange,
  description,
  disabled,
}: {
  label: string;
  description?: string;
  tooltip?: string;
  value: Date | undefined;
  required?: boolean;
  disabled?: boolean;
  onChange: (
    date: Date | undefined,
    selectedDay: Date | undefined,
    modifiers: any,
    pickersContext: any
  ) => void;
}) {
  // Custom handler to adjust the selected date to UTC
  const handleSelect = (
    date: Date | undefined,
    selectedDay: Date | undefined,
    modifiers: any,
    pickersContext: any
  ) => {
    if (date) {
      // Convert the date to UTC but keep the same local time
      const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      // Call the onChange callback with all required arguments
      onChange(utcDate, selectedDay, modifiers, pickersContext);
    } else {
      // Handle the undefined case, passing all arguments as is
      onChange(undefined, selectedDay, modifiers, pickersContext);
    }
  };

  const isEmpty = !value;

  return (
    <FormItem className="flex flex-col py-2">
      <FormLabel className="flex flex-row mb-0,5">
        {label}
        {'\u00A0'}
        {tooltip && <FormToolTip tooltipContent={tooltip} />}
      </FormLabel>
      <div className="flex-1 flex">
      <Popover modal={true}>
      {required && <div className={`rounded-3xl ${!isEmpty ? "bg-fimblue" : "bg-fim"} w-1`} />}
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal",
                !value && "text-muted-foreground"
              )}
              disabled={disabled}
            >
              {value ? (
                format(value, "PPP")
              ) : (
                <span>Wähle ein Datum aus.</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect} // Use the custom handler
            disabled={(date) => date < new Date("1900-01-01")}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      </div>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}

