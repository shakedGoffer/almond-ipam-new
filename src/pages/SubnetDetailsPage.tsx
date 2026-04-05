import { Link, useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData";
import { formatAddressesData, type Subnet } from "@/lib/utils/dataUtils";
import Divider from "../components/Divider";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";
import { Button } from "@/components/ui/button";
import { ChevronsLeft, Edit, Plus, TrashIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SubnetDetailsPage = () => {
  const { subnetAddress } = useParams();
  const subnet: Subnet = fakeData[subnetAddress];

  const columns = [
    { Header: "Address", accessor: "address" },
    { Header: "Description", accessor: "address_description" },
    { Header: "Mac", accessor: "mac_address" },
    { Header: "Type", accessor: "type" },
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
        <CardContent >
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
        <Table
          data={formatAddressesData(subnet.allocated_ips)}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default SubnetDetailsPage;
