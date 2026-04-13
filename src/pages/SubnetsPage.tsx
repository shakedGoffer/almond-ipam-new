import { ChevronsRight, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import fakeData from "../../fakeData/fakeData";

import { formatSubnetsData } from "../lib/utils/formatDate";

import { type ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import SubnetDialogForm from "@/components/dialogs/SubnetDialogForm";
import DeleteConfirmationDialog from "@/components/dialogs/DeleteConfirmationDialog";
import type Subnet from "@/types/subnet";

import DataTable from "@/features/dataTable";

const SubnetPage = () => {
  // Columns for Subnets DataTable
  const subnetsColumns: ColumnDef<Subnet>[] = [
    {
      accessorKey: "fullAddress",
      enableGlobalFilter: true,
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Address" />
      ),
    },
    {
      accessorKey: "name",
      enableGlobalFilter: true,
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Name" />
      ),
    },
    {
      accessorKey: "description",
      enableGlobalFilter: true,
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Description" />
      ),
    },
    {
      id: "usage",
      accessorKey: "allocated_ips_percent",
      enableGlobalFilter: false,
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Usage" />
      ),
    },
    {
      /* Drop Down "More Actions" (with delete & edit) */
      id: "actions",
      enableGlobalFilter: false,
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
                variant="edit"
                title={`Edit Subnet ${subnet.fullAddress}`}
                dialogTrigger={
                  <DropdownMenuItem>
                    <Edit /> Edit
                  </DropdownMenuItem>
                }
              />

              <DropdownMenuSeparator />

              <DeleteConfirmationDialog
                title={`Delete Subnet ${subnet.fullAddress}`}
                description="This is a permanent action. All Subnets data, address, and details will be deleted immediately and cannot be recovered."
                dialogTrigger={
                  <DropdownMenuItem className="text-red-500">
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

      <DataTable.Provider className="flex-1 min-w-min gap-6">
        <DataTable.Toolbar>
          <div className="flex flex-row gap-2">
            <DataTable.SearchInput />
            <DataTable.Filter />
          </div>
          <SubnetDialogForm
            variant="create"
            title="Create New Subnet "
            dialogTrigger={
              <Button className="gap-1">
                <Plus />
                Create New Subnet
              </Button>
            }
          />
        </DataTable.Toolbar>
        <DataTable.Content
          columns={subnetsColumns}
          data={formatSubnetsData(fakeData)}
          className="h-full"
        />
      </DataTable.Provider>
  
  );
};

export default SubnetPage;
