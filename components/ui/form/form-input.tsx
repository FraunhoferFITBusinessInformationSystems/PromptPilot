import React from "react";
import { Input } from "../input";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../form";
import { FormToolTip } from "./form-tooltip";

/**
 * Props for the FormInput component.
 *
 * @interface FormInputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * 
 * @property {string} label - The label for the input field.
 * @property {UseFormRegisterReturn<string>} register - The register function from react-hook-form for managing form state.
 * @property {string} [description] - Optional description text for the input field.
 * @property {string} [tooltip] - Optional tooltip content to provide additional information.
 * @property {string} [placeholder] - Optional placeholder text for the input field.
 * @property {string} [required] - Optional Required for the input field red Bar.
 */
export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegisterReturn<string>;
  description?: string;
  tooltip?: string;
  placeholder?: string;
  required?: boolean;
  }

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, register, tooltip, placeholder, required, ...props }, ref) => {
    const { watch } = useFormContext();
    const value = watch(register.name);
    const isEmpty = !value || value === "";

    return (
        <FormItem>
          {label ? (
            <FormLabel>
              {label}{"\u00A0"}
              {tooltip && <FormToolTip tooltipContent={tooltip} />}
            </FormLabel>
          ) : null}
          <div className="flex flex-row">
            {required && <div className={`rounded-3xl ${!isEmpty ? "bg-fimblue" : "bg-fim"} w-1`} />}
            <FormControl>
              <Input placeholder={placeholder} {...register} {...props} />
            </FormControl>
          </div>
          {props.description && <FormDescription>{props.description}</FormDescription>}
          <FormMessage />
        </FormItem>
    );
  }
);


