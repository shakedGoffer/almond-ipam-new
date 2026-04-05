import {Plus,} from "lucide-react";
import Table from "../components/Table";
import { Button } from "@/components/ui/button";
import fakeData from "../../fakeData/fakeData"
import SearchBar from "../components/SearchBar";
import { formatSubnetsData } from "@/lib/utils/dataUtils";

const SubnetPage = () => {
  const columns = [
    { Header: "Name", accessor: "name" },
    { Header: "Subnet", accessor: "fullAddress" },
    { Header: "Usage", accessor: "allocated_ips_percent" },
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
      <Table
        columns={columns}
        data={formatSubnetsData(fakeData)}
        sort={true}
        className="flex flex-col h-fill flex-1"
        /* actions={
          <div className="flex flex-row gap-4">
            <EllipsisVertical />
            <button className="relative group inline-block">
              <Tooltip text="More..." position="left" />
            </button>
          </div>
        } */
       moreKey={"address"}
      />
    </div>
  );
};



export default SubnetPage;
