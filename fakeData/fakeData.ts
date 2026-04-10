import type { Subnet } from "@/lib/utils/formatDate";

const data: Record<string, Subnet> ={
    "20.20.20.0": {
        "name": "test1",
        "description": "test description",
        "gateway": "20.20.20.254",
        "dns_servers": [
            "20.20.20.1",
            "20.20.20.2"
        ],
        "subnet_cidr": 24,
        "allocated_ips": {
            "20.20.20.10": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "20.20.20.11": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "dynamic"
            },
            "20.20.20.12": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "dynamic"
            },
            "20.20.20.13": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "dynamic"
            },
            "20.20.20.14": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "20.20.20.40": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "20.20.20.221": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            }
        },
        "free_ips": {
            "20.20.20.22": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            },
            "20.20.20.23": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            },
            "20.20.20.24": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            }
        },
        "allocated_ips_percent": 70
    },
    "1.1.1.0": {
        "name": "Subnet C",
        "description": "fdgfdg",
        "gateway": "1.1.1.2",
        "dns_servers": [],
        "subnet_cidr": 29,
        "allocated_ips": {
            "1.1.1.3": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "1.1.1.4": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "1.1.1.5": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            },
            "1.1.1.6": {
                "address_description": "test-host1",
                "mac_address": "00:1B:44:11:3A:B7",
                "type": "reserved"
            }
        },
        "free_ips": {
            "1.1.1.1": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            }
        },
        "allocated_ips_percent": 80
    },
    "3.3.3.0": {
        "name": "Subnet A",
        "description": "fdgfdg dfgfdg fdghfghgf sfergfergtr",
        "gateway": "3.3.3.2",
        "dns_servers": [],
        "subnet_cidr": 29,
        "allocated_ips": {
            "3.3.3.3": {
                "address_description": "test-host3",
                "mac_address": "00:3B:44:33:3A:B7",
                "type": "reserved"
            },
            "3.3.3.4": {
                "address_description": "test-host3",
                "mac_address": "00:3B:44:33:3A:B7",
                "type": "reserved"
            },
            "3.3.3.5": {
                "address_description": "test-host3",
                "mac_address": "00:3B:44:33:3A:B7",
                "type": "reserved"
            },
            "3.3.3.6": {
                "address_description": "test-host3",
                "mac_address": "00:3B:44:33:3A:B7",
                "type": "reserved"
            }
        },
        "free_ips": {
            "3.3.3.3": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            }
        },
        "allocated_ips_percent": 91
    },
    "4.4.4.0": {
        "name": "Subnet B",
        "description": "fdgfdg dfgfdg fdghfghgf sfergfergtr",
        "gateway": "4.4.4.2",
        "dns_servers": [],
        "subnet_cidr": 29,
        "allocated_ips": {
            "4.4.4.4": {
                "address_description": "test-host4",
                "mac_address": "00:4B:44:44:4A:B7",
                "type": "reserved"
            },
            "4.4.4.8": {
                "address_description": "test-host4",
                "mac_address": "00:4B:44:44:4A:B7",
                "type": "reserved"
            },
            "4.4.4.5": {
                "address_description": "test-host4",
                "mac_address": "00:4B:44:44:4A:B7",
                "type": "reserved"
            },
            "4.4.4.6": {
                "address_description": "test-host4",
                "mac_address": "00:4B:44:44:4A:B7",
                "type": "reserved"
            }
        },
        "free_ips": {
            "4.4.4.4": {
                "address_description": "",
                "mac_address": "",
                "type": "free"
            }
        },
        "allocated_ips_percent": 50
    }
}

export default data;