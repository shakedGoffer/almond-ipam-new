import SubnetsTable from "@/components/SubnetsTable";
import fakeData from "../../fakeData/fakeData";
import AddressAvailability from "../components/AddressAvailability";
import AddressSummary from "../components/AddressSummary";
import Table from "../components/Table";
import TotalsPieChart from "../components/TotalsPieChart";
import {
  formatSubnetsData,
  countTotalAddresses,
  type Subnet,
} from "../lib/utils/dataUtils";
import { DataTable } from "@/components/SubnetsTable copy";

import { type ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Edit,
  MoreHorizontal,
  MoreVertical,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HomePage = () => {
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Subnet", accessor: "fullAddress" },
    { Header: "Usage", accessor: "allocated_ips_percent" },
  ];

  const columns_test: ColumnDef<Subnet>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "fullAddress",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Address
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "allocated_ips_percent",
      header: "Usage",
    },

    {
      id: "actions",
      cell: ({ row }) => {
        const subnet = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4" />
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
        <Table columns={columns} data={subnetsList} className="" />
        <SubnetsTable columns={columns} data={subnetsList} />
        <DataTable columns={columns_test} data={subnetsList} />
      </div>
    </div>
  );
};

export default HomePage;
