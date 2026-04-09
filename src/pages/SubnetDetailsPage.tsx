import { Link, useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import {
  formatAddressesData,
  type Ip,
  type Subnet,
} from "@/lib/utils/dataUtils";

import SearchBar from "../components/SearchBar";
import { Button } from "@/components/ui/button";
import {
  ChevronsLeft,
  Edit,
  MoreVertical,
  Plus,
  Trash,
  TrashIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DataTableColumnHeader from "@/components/dataTable/DataTableColumnHeader";

import { type ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/dataTable/Table";
import { Separator } from "@/components/ui/separator";
import SubnetDialogForm from "@/components/dialogs/SubnetDialogForm";
import DeleteConfirmationDialog from "@/components/dialogs/DeleteConfirmationDialog";
import AddressDialogForm from "@/components/dialogs/AddressDialogForm";

const SubnetDetailsPage = () => {
  const { subnetAddress } = useParams();
  const subnet: Subnet = fakeData[subnetAddress];

  // Columns for Addresses DataTable
  const subnetAddressesColumns: ColumnDef<Ip>[] = [
    {
      accessorKey: "address_description",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Description" />
      ),
    },
    {
      accessorKey: "address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Address" />
      ),
    },
    {
      accessorKey: "mac_address",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Mac" />
      ),
    },
    {
      accessorKey: "type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} sort title="Type" />
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const address = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="size-4.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <AddressDialogForm
                variant="edit"
                addressType={address.type}
                title={`Edit Address ${address.address}`}
                dialogTrigger={
                  <DropdownMenuItem>
                    <Edit /> Edit
                  </DropdownMenuItem>
                }
              />
              <DropdownMenuSeparator />
              <DeleteConfirmationDialog
                title={`Delete Address ${address.address}`}
                description="This is a permanent action. All Address data will be deleted immediately and cannot be recovered."
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
  ];

  return (
    <div className="flex flex-col flex-1 min-w-min gap-5">
      {/* Top tools bar (delete & edit subnet + create new address + go back) */}
      <div className="flex flex-row items-center justify-between text-primary-text">
        <Link to={`/subnets`}>
          <ChevronsLeft />
        </Link>
        <div className="flex flex-row gap-2">
          <DropdownMenu>
            <div className="flex flex-col w-full flex-1">
              <DropdownMenuTrigger asChild className="">
                <Button className="gap-1 px-10">
                  <Plus />
                  Add Address
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <AddressDialogForm
                  variant="create"
                  addressType="reserved"
                  title={`Reserve Address`}
                  description={`Reserve Address On Subnet: ${subnetAddress}/${subnet.subnet_cidr}`}
                  dialogTrigger={
                    <DropdownMenuItem className="text-address-reserved justify-center">
                      Reserve Address
                    </DropdownMenuItem>
                  }
                />
                <DropdownMenuSeparator />
                <AddressDialogForm
                  variant="create"
                  addressType="dynamic"
                  title={`Allocate Free Address`}
                  description={` Allocate Free Address On Subnet: ${subnetAddress}/${subnet.subnet_cidr}`}
                  dialogTrigger={
                    <DropdownMenuItem className="text-address-dynamic justify-center">
                      Allocate Free Address
                    </DropdownMenuItem>
                  }
                />
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <SubnetDialogForm
            title={`Edit Subnet ${subnetAddress}/${subnet.subnet_cidr}`}
            dialogTrigger={
              <Button className="p-3">
                <Edit />
              </Button>
            }
          />
          <DeleteConfirmationDialog
            title={`Delete Subnet ${subnetAddress}/${subnet.subnet_cidr}`}
            description="This is a permanent action. All Subnets data, address, and details
            will be deleted immediately and cannot be recovered."
            dialogTrigger={
              <Button className="p-3">
                <TrashIcon />
              </Button>
            }
          />
        </div>
      </div>

      <Separator />

      {/* Subnet details card */}
      <Card>
        <CardContent>
          <div className="flex flex-row gap-4 justify-around">
            <ul>
              <li>
                Subnet Address: {subnetAddress}/{subnet.subnet_cidr}
              </li>
              <li>Subnet Name: {subnet.name}</li>
              <li>Subnet Description: {subnet.description}</li>
            </ul>
            <Separator orientation="vertical" />
            <ul>
              <li> Default Gateway: {subnet.gateway}</li>
              <li>DNS Servers: {subnet.dns_servers.toString()}</li>
              <li>
                Total Addresses: {Object.keys(subnet.allocated_ips).length}
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Address table + search & filter bar */}
      <div className="flex flex-col gap-4 mt-4">
        <SearchBar />
        <DataTable
          columns={subnetAddressesColumns}
          data={formatAddressesData(subnet.allocated_ips)}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default SubnetDetailsPage;
