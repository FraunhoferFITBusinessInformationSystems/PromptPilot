'use client';

import {
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import MultiSelect, { Option } from '@/components/ui/multi-select';
import { SelectItems } from './form-select';
import { Button } from '../button';
import { PlusIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FormToolTip } from './form-tooltip';

export default function FormMultiSelect({
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
					value={value}
					onChange={onChange}
					defaultOptions={options}
					placeholder={placeholder}
					hidePlaceholderWhenSelected
					emptyIndicator={
						<p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
							no results found.
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
