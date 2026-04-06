interface Ip {
    address_description: string,
    mac_address: string,
    type: string,
}

interface Subnet {
    address?: string,
    fullAddress?: string,
    name: string,
    description: string,
    gateway: string,
    dns_servers: string[],
    subnet_cidr: number,
    allocated_ips: Record<string, Ip>,
    free_ips: Record<string, Ip>,
    allocated_ips_percent: number,
}

/* Convert Subnets row data to array of subnets & format it */
const formatSubnetsData = (rowData: Record<string, Subnet>) => {
    return Object.entries(rowData).map(([address, fullSubnet]) => ({
        address: address,
        fullAddress: address + "/" + fullSubnet.subnet_cidr,
        ...fullSubnet
    }));
};

/* Convert Addresses row data to array of Addresses & format it */
const formatAddressesData = (rowData: Record<string, Ip>) => {
    return Object.entries(rowData).map(([address, fullAddress]) => ({
        address: address,
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


export { formatSubnetsData, countTotalAddresses, formatAddressesData, type Subnet, type Ip };