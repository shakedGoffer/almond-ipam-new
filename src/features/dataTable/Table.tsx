import {
  type Cell,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type Header,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useTableContext } from "./TableProvider";
import UsageBar from "@/components/UsageBar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  searchBar?: boolean;
  columnFilters?: React.ReactNode;
}

const TableContent = <TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { globalFilter, setGlobalFilter } = useTableContext();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
    },
  });

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-container-bg-transparent text-primary-text min-w-fit",
        className,
      )}
    >
      <Table>
        <TableHeader className="bg-container-bg-transparent">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-gray-500/20">
              {headerGroup.headers.map((header) => (
                <DataTableHeader key={header.id} header={header} />
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                className="border-gray-500/20"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <DataTableCell key={cell.id} cell={cell} />
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

const DataTableCell = <TData,>({ cell }: { cell: Cell<TData, unknown> }) => {
  const cellID = cell.column.id;
  const cellValue = cell.getValue() as string | number;

  const cellContent = ({ cellID }: { cellID: string }) => {
    if (cellID === "usage") {
      return <UsageBar usagePercentage={cellValue as number} />;
    }
    if (cellID === "type") {
      return (
        <div className="flex flex-row gap-2 items-center">
          <div
            className="size-4 rounded-sm"
            style={{ backgroundColor: `var(--color-address-${cellValue}` }}
          />
          <span className="capitalize">{cellValue} </span>
        </div>
      );
    }
    return flexRender(cell.column.columnDef.cell, cell.getContext());
  };

  return (
    <TableCell
      className={cn(
        "px-6 max-w-92 truncate min-w-min",
        cellID === "usage" && "min-w-50",
        (cellID === "actions" || cellID === "more") &&
          "w-fit text-center px-2 w-10",
      )}
    >
      {cellContent({ cellID })}
    </TableCell>
  );
};

const DataTableHeader = <TData,>({
  header,
}: {
  header: Header<TData, unknown>;
}) => {
  return (
    <TableHead key={header.id} className="p-1 ">
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </TableHead>
  );
};

export default TableContent;
