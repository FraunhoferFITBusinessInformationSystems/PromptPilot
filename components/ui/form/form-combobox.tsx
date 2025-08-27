"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SelectItems } from "./form-select"
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons"
import React from "react"
import { FormToolTip } from "./form-tooltip"

export function FormCombobox(
  {
    label,
    placeholder,
    description,
    tooltip,
    value,
    required,
    onChange,
    options,
    disabled,
    onItemAdd
  }: { label?: string, placeholder: string, description?: string, tooltip?: string, required?: boolean, value: string | undefined, onChange: ((option: string) => void); options: SelectItems; disabled?: boolean; onItemAdd?: () => void; }
) {
  const [open, setOpen] = React.useState(false)
  const isEmpty = !value || value === "";

  return (
    <FormItem className="flex flex-col py-2">
      {(label || tooltip) && (
        <FormLabel className="flex flex-row mb-0.5">
          {label && <span>{label}&nbsp;</span>}
          {tooltip && <FormToolTip tooltipContent={tooltip} />}
        </FormLabel>
      )}

      <div className="flex items-center gap-2">
        <div className="flex-1 flex">
          <Popover open={open} onOpenChange={setOpen}>
          {required && <div className={`rounded-3xl ${!isEmpty ? "bg-fimblue" : "bg-fim"} w-1`} />}
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={disabled}
                  className={cn(
                    "w-full justify-between",
                    !value && "text-muted-foreground"
                  )}
                >
                  {value
                    ? options.find(
                      (option) => option.value === value
                    )?.label
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 popover-content-width-full">
              <Command>
                <CommandInput placeholder="Suche..." />
                <CommandList>
                  <CommandEmpty>Keine Einträge gefunden</CommandEmpty>
                  <CommandGroup>
                    {(value) ? <CommandItem
                      value={undefined}
                      key="clear"
                      onSelect={(_) => onChange('')}
                      className="bg-gray-100"
                    >
                      <Cross1Icon
                        className={cn(
                          "mr-2 h-4 w-4 text-red-800 opacity-100"
                        )}
                      />
                      <span className="text-red-800">Auswahl löschen</span>
                    </CommandItem> : ''}
                    {options.map((option) => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={(v) => {
                          onChange(options.find((option) => option.label === v)?.value ?? '')
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            option.value === value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        {onItemAdd && <Button type="button" variant="outline" size="icon" onClick={onItemAdd}>
          <PlusIcon className="h-5 w-5" />
        </Button>}
      </div>
      {description && <FormDescription>
        {description}
      </FormDescription>}
      <FormMessage />
    </FormItem>
  )
}