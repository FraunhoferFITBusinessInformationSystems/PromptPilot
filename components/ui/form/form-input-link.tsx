import React from "react";
import { Input } from "../input";
import { useFormContext, UseFormRegisterReturn } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../form";
import { FormToolTip } from "./form-tooltip";
import { Button } from "../button";
import { ExternalLink } from "lucide-react";

/**
 * Props for the FormInput component.
 *
 * @interface FormInputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * 
 * @property {string} label - The label for the input field.
 * @property {UseFormRegisterReturn<string>} register - The register function from react-hook-form for managing form state.
 * @property {string} [description] - Optional description text for the input field.
 * @property {string} [tooltipContent] - Optional tooltip content to provide additional information.
 * @property {string} [placeholder] - Optional placeholder text for the input field.
 */
export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn<string>;
  description?: string;
  tooltip?: string;
  placeholder?: string;
  required?: boolean;
  }

export const FormInputLink = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, register, tooltip, placeholder, required, ...props }, ref) => {
    const form = useFormContext();
    const { watch } = useFormContext();
    const value = watch(register.name);
    const isEmpty = !value || value === "";

    return (
      <FormItem>
        <FormLabel className="flex flex-row mt-2">
          {label}{"\u00A0"}
          {tooltip && <FormToolTip tooltipContent={tooltip} />}
        </FormLabel>
        <FormControl>
        <div className="flex items-center gap-2">
            <div className="flex-1 flex">
              {required && <div className={`rounded-3xl ${!isEmpty ? "bg-fimblue" : "bg-fim"} w-1`} />}
              <Input placeholder={placeholder} {...register} {...props} />
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href={form.getValues(register.name)}
            >
              <Button type="button" variant="outline" size="icon">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </FormControl>
        {props.description && <FormDescription>{props.description}</FormDescription>}
        <FormMessage />
      </FormItem>
    );
  }
);


