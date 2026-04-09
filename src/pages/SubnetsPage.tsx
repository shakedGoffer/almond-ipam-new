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
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";
import { DataTable } from "@/components/dataTable/Table";
import { Link } from "react-router-dom";
import SubnetDialogForm from "@/components/dialogs/SubnetDialogForm";
import ConfirmDialog from "@/components/dialogs/ConfirmDialog";

const SubnetPage = () => {
  // Columns for Subnets DataTable
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
      /* Drop Down "More Actions" (with delete & edit) */
      id: "actions",
      cell: ({ row }) => {
        const subnet = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="size-4.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="">
              <SubnetDialogForm
                title={`Edit Subnet ${subnet.fullAddress}`}
                dialogTrigger={
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Edit /> Edit
                  </DropdownMenuItem>
                }
              />

              <DropdownMenuSeparator />

              <ConfirmDialog
                title={`Delete Subnet ${subnet.fullAddress}`}
                description="This is a permanent action. All Subnets data, address, and details will be deleted immediately and cannot be recovered."
                dialogTrigger={
                  <DropdownMenuItem
                    className="text-red-500"
                    onSelect={(e) => e.preventDefault()}
                  >
                    <Trash />
                    Delete
                  </DropdownMenuItem>
                }
              />
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
              <ChevronsRight className="size-4.5" />
            </Link>
          </Button>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col flex-1 min-w-min flex-1 gap-6">
      {/* Top section - search + filter bar + create subnet dialog */}
      <div className="flex flex-row justify-around items-center gap-2">
        <SearchBar />
        <SubnetDialogForm
          title="Create New Subnet "
          dialogTrigger={
            <Button className="gap-1">
              <Plus />
              Create New Subnet
            </Button>
          }
        />
      </div>
      {/* All Subnets table */}
      <DataTable
        columns={subnetsColumns}
        data={formatSubnetsData(fakeData)}
        className="h-full w-full"
      />
    </div>
  );
};

export default SubnetPage;
