import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "../form";
import { FormToolTip } from "./form-tooltip";
import { Textarea } from "../textarea";

/**
 * Props for the FormTextArea component.
 *
 * @interface FormTextAreaProps
 * @extends {React.TextareaHTMLAttributes<HTMLTextAreaElement>}
 *
 * @property {string} label - The label for the textarea.
 * @property {UseFormRegisterReturn<string>} register - The register function from react-hook-form.
 * @property {string} [description] - Optional description for the textarea.
 * @property {string} [tooltipContent] - Optional tooltip content for the textarea.
 * @property {string} [placeholder] - Optional placeholder text for the textarea.
 */
export interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  register: UseFormRegisterReturn<string>;
  description?: string;
  tooltipContent?: string;
  placeholder?: string;
  required?: boolean;
}

export const FormTextArea = React.forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ className, label, register, tooltipContent: tooltip, required, placeholder, ...props }, ref) => {
    return (
      <FormItem>
        <FormLabel className="flex flex-row mt-2">
          {label}{"\u00A0"}
          {tooltip && <FormToolTip tooltipContent={tooltip} />}
        </FormLabel>
        <FormControl>
          <Textarea placeholder={placeholder} {...register} {...props} />
        </FormControl>
        {props.description && <FormDescription>{props.description}</FormDescription>}
        <FormMessage />
      </FormItem>
    );
  }
);