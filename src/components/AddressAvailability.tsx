import GuidPieChart from "./charts/GuidPieChart";
import Card from "./Card";

interface AddressAvailabilityProps {
    totalFreeAddresses: number,
    totalAllocatedAddresses: number,
}
const AddressAvailability = ({ totalFreeAddresses, totalAllocatedAddresses, }: AddressAvailabilityProps) => {
    const utilization = Math.round((totalAllocatedAddresses / (totalAllocatedAddresses + totalFreeAddresses)) * 100);

    const data = [
        {
            name: "allocated",
            value: totalAllocatedAddresses,
            fill: "var(--color-address-allocated)",
        },
        {
            name: "remaining",
            value: totalFreeAddresses,
            fill: "var(--color-address-remaining)",
        },
    ];

    return (
        <Card className="flex flex-col items-center w-fit">
            <Card.title text="Address Availability" />

            <GuidPieChart data={data} className="size-48 flex flex-1 ">
                <span className="text-xl font-bold text-primary-text">
                    {utilization}%
                </span>
                <span className="text-[10px] uppercase text-secondary-text">Used</span>
            </GuidPieChart>

            <div className="text-primary-text mt-auto mt-4">
                <ul className="flex flex-1 flex-row justify-around gap-12">
                    {data.map((ipType) => (
                        <li key={ipType.name}>
                            <div className="flex items-center gap-2 text-sm">
                                <div
                                    className="size-[14px] rounded-[3px]"
                                    style={{ backgroundColor: `${ipType.fill}` }}
                                />
                                <span className="capitalize text-lg">{ipType.value}</span>
                            </div>
                            <span className="capitalize text-xs">{ipType.name} </span>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default AddressAvailability;
