import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UsageBar from "./UsageBar";



interface Column {
  Header: string;
  accessor: string;
}

interface TableProps {
  columns: Column[]
  data: [],
  className?: string,
  sort?: boolean,  
  moreKey?: string, // key for more details about the object
}


const SubnetsTable = ({ columns, data }: TableProps) => {
  return (
    <Table className="bg-container-bg-transparent rounded-lg">
      <TableHeader className="rounded-lg" >
        <TableRow >
          {columns.map((column) => (
            <TableHead key={column.accessor}  >
              {column.Header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="group">
              {columns.map((column) => (
                <TableCell key={column.accessor}>
                  {column.Header === "Usage" ?
                    (<UsageBar usagePercentage={row[column.accessor]} />) :
                    (row[column.accessor])}
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default SubnetsTable;
