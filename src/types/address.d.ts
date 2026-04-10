interface Address {
    ip?: string,
    address_description: string,
    mac_address: string,
    type: "dynamic" | "reserved" | "free",
}

export default Address;