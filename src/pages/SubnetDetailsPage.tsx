import { Link, useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import { formatAddressesData, type Ip, type Subnet } from "@/lib/utils/dataUtils";
import Divider from "../components/Divider";

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
import DataTableColumnHeader from "@/components/DataTable/DataTableColumnHeader";

import { type ColumnDef } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/DataTable/Table";

const SubnetDetailsPage = () => {
  const { subnetAddress } = useParams();
  const subnet: Subnet = fakeData[subnetAddress];

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
  ];

  return (
    <div className="flex flex-col flex-1 min-w-min gap-6">
      <div className="flex flex-row items-center justify-between text-primary-text">
        <Link to={`/subnets`}>
          <ChevronsLeft />
        </Link>
        <div className="flex flex-row gap-2">
          <Button className="gap-1">
            <Plus />
            Add Address
          </Button>
          <Button className="p-2">
            <Edit />
          </Button>
          <Button className="p-2">
            <TrashIcon />
          </Button>
        </div>
      </div>
      <Divider />
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
            <Divider vertical />
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

      <div className="flex flex-col gap-4">
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
