import type Address from "@/types/address";
import type Subnet from "@/types/subnet";

/* Convert Subnets row data to array of subnets & format it */
const formatSubnetsData = (rowData: Record<string, Subnet>) => {
    return Object.entries(rowData).map(([address, fullSubnet]) => ({
        address: address,
        fullAddress: address + "/" + fullSubnet.subnet_cidr,
        ...fullSubnet
    }));
};

/* Convert Addresses row data to array of Addresses & format it */
const formatAddressesData = (rowData: Record<string, Address>) => {
    return Object.entries(rowData).map(([addressIP, fullAddress]) => ({
        ip: addressIP,
        ...fullAddress
    }));
};


/* Calculate the total free, dynamic and reserved addresses */
const countTotalAddresses = (subnetsList: Subnet[]) => {
    let free = 0;
    let dynamic = 0;
    let reserved = 0;

    subnetsList.forEach((subnet: Subnet) => {
        free += Object.keys(subnet.free_ips).length;
        Object.values(subnet.allocated_ips).forEach((ip) => {
            if (ip.type === "dynamic") {
                dynamic++;
            } else if (ip.type === "reserved") {
                reserved++;
            }
        });
    });

    return {
        totalFree: free,
        totalDynamic: dynamic,
        totalReserved: reserved,
        totalAllocated: dynamic + reserved
    };
};


export { formatSubnetsData, countTotalAddresses, formatAddressesData};