const data ={
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
                "type": "dynamic"
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
        "name": "feddsf",
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
    }
}

export default data;