//https://shadcnui-expansions.typeart.cc/docs/multiple-selector

'use client';
import React from 'react';
import {
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import MultiSelect, { type Option } from '@/components/ui/multi-select';
import type { SelectItems } from '@/components/ui/form/form-select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PlusIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { Button } from '../button';
import { FormToolTip } from './form-tooltip';

const mockSearch = async (value: string, options: SelectItems): Promise<Option[]> => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));
      resolve(res);
    }, 500);
  });
};

export default function MulitSelectWithAsyncSearch({
	label,
	placeholder,
	tooltip,
	options,
	value,
  required,
	onChange,
	onItemAdd
}: {
	label: string;
	placeholder: string;
	tooltip?: string;
	options: SelectItems;
	value: Option[] | undefined;
  required?: boolean;
	onChange: ((options: Option[]) => void);
	onItemAdd?: () => void; 
}) {
  const [isTriggered, setIsTriggered] = React.useState(false);
	const isEmpty = !value || value.length === 0;

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
            <MultiSelect
                onSearch={async (value) => {
                    setIsTriggered(true);
                    const res = await mockSearch(value, options);
                    setIsTriggered(false);
                    return res;
                }}
                placeholder={placeholder}
                //defaultOptions={options.slice(0,10)}
                value={value}
                onChange={onChange}
                hidePlaceholderWhenSelected
                loadingIndicator={
                    <p className="text-center text-sm leading-10 text-gray-600 dark:text-gray-400">
                        loading...
                    </p>
                }
                emptyIndicator={
                    <p className="text-center text-sm leading-10 text-gray-600 dark:text-gray-400">
                        Tippe um zu suchen...
                    </p>
                }
            />
        </div>
        {onItemAdd ? <Button type="button" variant="outline" size="icon" onClick={() => onItemAdd()}>
          <PlusIcon className="h-5 w-5" />
        </Button> : ''}
			</div>
        </FormControl>
        <FormMessage />
    </FormItem>
  );
};
