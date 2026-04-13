import type Address from "./address";

interface Subnet {
    address?: string,
    fullAddress?: string,
    name: string,
    description: string,
    gateway: string,
    dns_servers: string[],
    subnet_cidr: number,
    allocated_ips: Record<string, Address>,
    free_ips: Record<string, Address>,
    allocated_ips_percent: number,
}

export default Subnet;