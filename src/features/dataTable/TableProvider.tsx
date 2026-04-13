import { useState } from "react";
import { cn } from "@/lib/utils/cn";

import React, { createContext, useContext } from "react";

interface TableContextType {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

const TableContext = createContext<TableContextType | null>(null);

const DataTableProvider = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [globalFilter, setGlobalFilter] = useState("");
  return (
    <TableContext.Provider value={{ globalFilter, setGlobalFilter }}>
      <div className={cn("flex flex-col gap-6", className)}>{children}</div>
    </TableContext.Provider>
  );
};

const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context)
    throw new Error("Table components must be used within DataTableProvider");
  return context;
};

export default DataTableProvider;
export {useTableContext};
