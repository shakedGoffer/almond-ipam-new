import FormInput from "@/components/FormInput";
import { useTableContext } from "./TableProvider";

const TableSearchInput = () => {
  const { globalFilter, setGlobalFilter } = useTableContext();
  return (
    <FormInput
      placeholder="Search...."
      className="py-5 text-md border-0 w-[30vw] min-w-68 text-sm"
      value={globalFilter ?? ""}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setGlobalFilter(String(event.target.value))
      }
    />
  );
};


export default TableSearchInput;
