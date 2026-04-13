import fakeData from "../../fakeData/fakeData";
import AddressAvailability from "@/components/AddressAvailability";
import AddressSummary from "@/components/AddressSummary";
import TotalsPieChart from "@/components/TotalsPieChart";
import {
  formatSubnetsData,
  countTotalAddresses,
} from "../lib/utils/formatDate";
import type Subnet from "@/types/subnet";

import { type ColumnDef } from "@tanstack/react-table";
import { Edit, MoreVertical, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataTable from "@/features/dataTable";

const HomePage = () => {
  const subnetsColumns: ColumnDef<Subnet>[] = [
    {
      accessorKey: "fullAddress",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} title="Address" />
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} title="Name" />
      ),
    },
    {
      id: "usage",
      accessorKey: "allocated_ips_percent",
      header: ({ column }) => (
        <DataTable.ColumnHeader column={column} sort title="Usage" />
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
                <MoreVertical className="size-4.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="">
              <DropdownMenuItem>
                <Edit /> Edit
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

  const subnetsList = formatSubnetsData(fakeData);
  const totalAddresses = countTotalAddresses(subnetsList);

  return (
    <div className="flex flex-row h-fill w-fill flex-1 gap-10">
      <div className="flex flex-col h-fill w-fit gap-2 justify-center gap-16">
        <div className="w-full h-fit flex flex-row justify-around gap-2">
          <TotalsPieChart number={subnetsList.length} subTitle="Subnets" />
          <TotalsPieChart
            number={totalAddresses.totalFree + totalAddresses.totalAllocated}
            subTitle="Addresses"
          />
        </div>
        <div className=" w-fit flex flex-row gap-4">
          <AddressSummary
            totalFreeAddresses={totalAddresses.totalFree}
            totalReservedAddresses={totalAddresses.totalReserved}
            totalDynamicAddresses={totalAddresses.totalDynamic}
          />
          <AddressAvailability
            totalFreeAddresses={totalAddresses.totalFree}
            totalAllocatedAddresses={totalAddresses.totalAllocated}
          />
        </div>
      </div>
      <div className=" flex flex-col w-fill flex-1 justify-center p-4">
        <h1 className="text-xl font-bold mb-4 text-center text-primary-text">
          Top 10 Subnets By Usage
        </h1>

        <DataTable.Provider>
          <DataTable.Content columns={subnetsColumns} data={subnetsList} />
        </DataTable.Provider>
      </div>
    </div>
  );
};

export default HomePage;
