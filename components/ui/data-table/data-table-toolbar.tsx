"use client";

import { CalendarIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

// import { Input } from "@/components/ui/input"
// import { DataTableViewOptions } from "./data-table-view-options";

import Papa from "papaparse";
import { saveAs } from "file-saver";
import React, { useEffect, useId } from "react";
import { DateRange } from "react-day-picker";
import { format, set, sub } from "date-fns";

import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQueryState } from "nuqs";

type filterColumnOptions = {
  label: string;
  value: string | number | boolean;
  icon?: React.ComponentType<{ className?: string }>;
}[];

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  data: TData[];
  globalFilterValue: string;
  setGlobalFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

export function DataTableToolbar<TData>({
  table,
  data,
  globalFilterValue,
  setGlobalFilterValue,
}: DataTableToolbarProps<TData>) {

  const [search, setSearch] = useQueryState('search')

  useEffect(() => {
    if (search) {
      setGlobalFilterValue(search ?? '');
    }
  }, [search]);

  useEffect(() => {
    if (globalFilterValue) {
      setSearch(globalFilterValue);
    } else if (search && !globalFilterValue) {
      setSearch(null);
    }
  }, [globalFilterValue]);

  const isFiltered = table.getState().columnFilters.length > 0;

  const flattenObject = (obj: any, delimiter = ".", prefix = "") =>
    Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? `${prefix}${delimiter}` : "";

      if (
        typeof obj[k] === "object" &&
        obj[k] !== null &&
        Object.keys(obj[k]).length > 0
      )
        Object.assign(acc, flattenObject(obj[k], delimiter, pre + k));

      // eslint-disable-next-line
      // @ts-ignore
      else acc[pre + k] = obj[k];

      return acc;
    }, {});

  const saveAction = () => {
    const res = table.getRowModel().flatRows.map((v) => flattenObject(v.original))

    const csv = Papa.unparse(res);

    const file = new Blob([csv], { type: "text/plain;charset=utf-8" });

    saveAs(file, "export.csv");
  };

  // Filter

  const facetedFilter = ({ column, label }: { column: string, label: string }) => {
    return (
      <DataTableFacetedFilter
        key={useId()}
        column={table.getColumn(column)}
        title={label}
      />
    );
  };

  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: sub(new Date(), { months: 2 }),
  //   to: new Date(),
  // });

  return (
    <div className="flex items-center">
      <div className="flex flex-1 justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            className="h-8 w-[200px] lg:w-[250px] h-full"
            placeholder="Suche..."
            value={globalFilterValue ?? ""}
            onChange={(value) =>
              setGlobalFilterValue(String(value.target.value))
            }
          />
          <p className="opacity-50">Filter können über die einzelnen Spalten gesetzt werden.</p>
          {/* {filterColumns.map(({ column, label, isDate }) => {
            if (isDate) {
              return dateFilter({ column, label });
            }
            else {
              let opt: filterColumnOptions = [
                { label: "asdf", value: "asdf" }
              ]

              return facetedFilter({ column, label })
            };
          })} */}

          {isFiltered && (
            <Button
              className="h-8 px-2 lg:px-3"
              variant="outline"
              onClick={() => table.resetColumnFilters()}
            >
              Reset Filter
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        <Button onClick={saveAction}>Export als csv</Button>
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  );
}
