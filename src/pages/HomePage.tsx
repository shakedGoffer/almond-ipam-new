
import SubnetsTable from "@/components/SubnetsTable";
import fakeData from "../../fakeData/fakeData"
import AddressAvailability from "../components/AddressAvailability";
import AddressSummary from "../components/AddressSummary";
import Table from "../components/Table";
import TotalsPieChart from "../components/TotalsPieChart";
import { formatSubnetsData, countTotalAddresses, type Subnet } from "../lib/utils/dataUtils";
import { DataTable } from "@/components/SubnetsTable copy";

import { type ColumnDef } from '@tanstack/react-table';


const HomePage = () => {


  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Subnet", accessor: "fullAddress" },
    { Header: "Usage", accessor: "allocated_ips_percent" },
  ];

  const columns_test: ColumnDef<Subnet>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "fullAddress",
      header: "Subnet",
    },
    {
      accessorKey: "allocated_ips_percent",
      header: "Usage",
    },
  ]



  const subnetsList = formatSubnetsData(fakeData);
  const totalAddresses = countTotalAddresses(subnetsList)


  return (
    <div className="flex flex-row h-fill w-fill flex-1 gap-10">
      <div className="flex flex-col h-fill w-fit gap-2 justify-center gap-16">
        <div className="w-full h-fit flex flex-row justify-around gap-2">
          <TotalsPieChart number={subnetsList.length} subTitle="Subnets" />
          <TotalsPieChart number={totalAddresses.totalFree + totalAddresses.totalAllocated} subTitle="Addresses" />
        </div>
        <div className=" w-fit flex flex-row gap-4">
          <AddressSummary totalFreeAddresses={totalAddresses.totalFree}
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
        <SubnetsTable columns={columns} data={subnetsList}/>
        <DataTable columns={columns_test} data={subnetsList} />
      </div>
    </div>
  );
};

export default HomePage;
