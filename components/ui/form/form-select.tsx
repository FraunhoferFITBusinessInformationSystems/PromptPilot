import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormToolTip } from "./form-tooltip";
import { UseFormRegisterReturn } from "react-hook-form";
import React from "react";

export type SelectItem = {
	value: string;
	label: string;
};
export type SelectItems = SelectItem[];


export function FormSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: SelectItems;
  value: string;
  onChange: ((option: string) => void);
}) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Select
        defaultValue={value}
        value={value}
        onValueChange={onChange}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormDescription />
      <FormMessage />
    </FormItem>
  );
}


export interface FormSelectPropos extends UseFormRegisterReturn  {
  label: string;
  register: UseFormRegisterReturn<string>;
  description?: string;
  tooltip?: string;
  placeholder?: string;
  options: SelectItems;
}

export const FormSelectv2 = React.forwardRef<HTMLButtonElement, FormSelectPropos>(
  ({ label, register, tooltip, placeholder, options, ...props }, ref) => {
    return (
      <FormItem>
        <FormLabel className="flex flex-row mt-2">
          {label}{"\u00A0"}
          {tooltip && <FormToolTip tooltipContent={tooltip} />}
        </FormLabel>
        <Select {...register} {...props}>
        <FormControl>
          <SelectTrigger ref={ref}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormItem>
    )
  }
);