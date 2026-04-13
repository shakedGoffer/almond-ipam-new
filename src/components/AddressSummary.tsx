import SummeryBarChart from "./charts/SummeryBarChart";
import { Card, CardContent, CardTitle } from "./ui/card";

interface AddressSummaryProps {
  totalFreeAddresses: number;
  totalReservedAddresses: number;
  totalDynamicAddresses: number;
}

const AddressSummary = ({
  totalFreeAddresses,
  totalReservedAddresses,
  totalDynamicAddresses,
}: AddressSummaryProps) => {
  const data = [
    {
      name: "free",
      value: totalFreeAddresses,
      fill: "var(--color-address-free)",
    },
    {
      name: "dynamic",
      value: totalReservedAddresses,
      fill: "var(--color-address-dynamic)",
    },
    {
      name: "reserved",
      value: totalDynamicAddresses,
      fill: "var(--color-address-reserved)",
    },
  ];

  return (
    <Card className="flex flex-col gap-3 w-fit">
      <CardTitle className="text-center">
        <h2>Address Summery</h2>
      </CardTitle>
      <CardContent>
        <SummeryBarChart data={data} className="w-48 h-40" />
        <div className="flex flex-col text-primary-text gap-4">
          <ul className="gap-1 flex flex-col">
            {data.map((addressType) => (
              <li key={addressType.name} className="flex items-center gap-2 text-sm">
                <div
                  className="size-[14px] rounded-[3px]"
                  style={{ backgroundColor: `${addressType.fill}` }}
                />
                <span className="capitalize">{addressType.name} Addresses</span>
              </li>
            ))}
          </ul>
          {/*  <p className="text-sm ">Total Allocated Addresses: {totalAllocatedAddresses}</p> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressSummary;
