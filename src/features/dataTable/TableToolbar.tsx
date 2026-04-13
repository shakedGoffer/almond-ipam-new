import { cn } from "@/lib/utils/cn";
import React from "react";

interface TableToolbarProps {
    className?: string,
    children: React.ReactNode,
}
const DataTableToolbar = ({ children, className }: TableToolbarProps) => {
  return (
    <div className={cn("flex items-center justify-between gap-2", className)}>{children}</div>
  );
};

export default DataTableToolbar;
