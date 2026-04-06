import { ChevronsRight, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import fakeData from "../../fakeData/fakeData";

import { formatSubnetsData, type Subnet } from "../lib/utils/dataUtils";

import { type ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";
import { DataTable } from "@/components/DataTable/Table";
import { Link } from "react-router-dom";

const SubnetPage = () => {
  const subnetsColumns: ColumnDef<Subnet>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Name" />
      ),
    },
    {
      accessorKey: "fullAddress",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Address" />
      ),
    },
    {
      id: "usage",
      accessorKey: "allocated_ips_percent",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Usage" />
      ),
    },
    {
      id: "actions",
      cell: () => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="">
              <DropdownMenuItem>
                <Edit /> Edite
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <Trash />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      id: "more",
      cell: ({ row }) => {
        const subnet = row.original;

        return (
          <Button asChild variant={"ghost"} className="h-8 w-8 p-0">
            <Link to={`/subnets/${subnet.address}`}>
              <ChevronsRight />
            </Link>
          </Button>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col h-fill w-fill flex-1 gap-5 ">
      <div className="flex flex-row justify-around gap-4">
        <SearchBar />
        <div className="">
          <Button className="gap-1">
            <Plus />
            Create New Subnet
          </Button>
        </div>
      </div>
      <DataTable
        columns={subnetsColumns}
        data={formatSubnetsData(fakeData)}
        className="h-full w-full"
      />
    </div>
  );
};

export default SubnetPage;
