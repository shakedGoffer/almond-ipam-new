import { ChevronsRight, ChevronsUpDown } from "lucide-react";
import UsageBar from "./UsageBar";
import { Link } from "react-router-dom";
import type { Subnet } from "@/lib/utils/dataUtils";
import { cn } from "@/lib/utils/cn";

interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[]
  data: Subnet[],
  className?: string,
  sort?: boolean,  
  moreKey?: string, // key for more details about the object
}

const Table = ({ columns, data, className, sort, moreKey }: TableProps) => {
  return (
    <div className={cn("overflow-x-auto bg-container-bg-transparent rounded-lg min-h-96", className)}>
      <table className="w-full text-primary-text">
        <thead className="bg-[#F4F4F5] rounded-lg">
          <tr>
            {columns.map((column) => (
              <TableHeder key={column.accessor} >
                {column.Header}
                {sort && <ChevronsUpDown size={16} />}
              </TableHeder>
            ))}
            {moreKey && (<TableHeder key="more"></TableHeder>)}
          </tr>
        </thead>
        <tbody className="py-4">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="group">
              {columns.map((column) => (
                <TableItem key={column.accessor}>
                  {column.Header === "Usage" ?
                    (<UsageBar usagePercentage={row[column.accessor]} />) :
                    (row[column.accessor])}
                </TableItem>
              ))}
              {moreKey && (
                <MoreButton objectID={row[moreKey]}/>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

const TableItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <td className={cn("py-3 px-4 border-b border-gray-300 w-fit max-w-40 group-last:border-0", className)}>
      {children}
    </td>
  );
};

const TableHeder = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <th className={cn("py-3 px-4 text-left", className)}>
      <div className="flex flex-row items-center gap-2 uppercase">
        {children}
      </div>
    </th>
  );
};


const MoreButton = ({ objectID }: { objectID: string }) => {
  return (
    <TableItem key="more" className="w-px">
      <Link  to={`/subnets/${objectID}`}>
        < ChevronsRight />
      </Link >
    </TableItem>
  );
}

export default Table;
