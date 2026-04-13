import { type Column } from "@tanstack/react-table";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

interface DataTableColumnsProps<TData,TValue,> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  sort?: boolean;
}

const TableColumnHeader = <TData, TValue>({
  column,
  title,
  sort,
  className,
}: DataTableColumnsProps<TData, TValue>) => {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex flex-row items-center gap-2 m-1 ", className)}>
      {sort && (
        <Button
          variant="ghost"
          className="px-3 py-2.5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <span>{title}</span>
          {column.getIsSorted() === "desc" ? (
            <ChevronDown />
          ) : column.getIsSorted() === "asc" ? (
            <ChevronUp />
          ) : (
            <ChevronsUpDown />
          )}
        </Button>
      )}
      {!sort && <span className="px-3 py-2.5">{title}</span>}
    </div>
  );
};

export default TableColumnHeader;
