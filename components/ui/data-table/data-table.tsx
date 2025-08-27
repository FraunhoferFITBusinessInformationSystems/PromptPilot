"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { parseAsJson, useQueryState } from "nuqs";
import { z } from "zod";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onRowSelected?: (row: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowSelected,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const [isMounted, setIsMounted] = React.useState(false)

  // Fix error on react table, when the table is not mounted
  React.useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

// react table hook, and other codes...

const table = useReactTable({
  data,
  columns,
  state: {
    sorting,
    columnVisibility,
    rowSelection,
    columnFilters,
    globalFilter,
  },
  enableRowSelection: true,
  onRowSelectionChange: setRowSelection,
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  onColumnVisibilityChange: setColumnVisibility,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
});

const sortingSchema = z.array(z.object({
  id: z.string(),
  desc: z.boolean(),
}));

type SortingSchemaState = z.infer<typeof sortingSchema>;

const columnFiltersSchema = z.array(z.object({
  id: z.string(),
  value: z.array(z.string()),
}));

type ColumnFiltersSchemaState = z.infer<typeof columnFiltersSchema>;

const [sortingQuery, setSortingQuery] = useQueryState<SortingSchemaState>('sorting', parseAsJson(sortingSchema.parse));
const [columnFiltersQuery, setColumnFiltersQuery] = useQueryState('columnFilters', parseAsJson(columnFiltersSchema.parse));

React.useEffect(() => {
  if (sorting.length > 0) {
    setSortingQuery(sorting as unknown as SortingSchemaState);
  } else if (sorting.length === 0 && sortingQuery) {
    setSortingQuery(null);
  }
}, [sorting, setSortingQuery]);

React.useEffect(() => {
  if (sorting.length === 0 && sortingQuery) {
    setSorting(sortingQuery as unknown as SortingState);
  }
}, [sortingQuery])

React.useEffect(() => {
  if (columnFilters.length > 0) {
    setColumnFiltersQuery(columnFilters as unknown as ColumnFiltersSchemaState);
  } else if (columnFilters.length === 0 && columnFiltersQuery) {
    setColumnFiltersQuery(null);
  }
}, [columnFilters, setColumnFiltersQuery]);

React.useEffect(() => {
  if (columnFilters.length === 0 && columnFiltersQuery) {
    setColumnFilters(columnFiltersQuery as unknown as ColumnFiltersState);
  } 
}, [columnFiltersQuery])

// Fix error on react table, when the table is not mounted
  if (!isMounted) return null

return (
  <div className="space-y-4">
      
        <DataTableToolbar
          data={data}
          globalFilterValue={globalFilter}
          setGlobalFilterValue={setGlobalFilter}
          table={table}
          />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                  <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  // onClick={(_) => onRowSelected && onRowSelected(row.original)}
                  // onDoubleClick={(_) => onRowSelected && onRowSelected(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
