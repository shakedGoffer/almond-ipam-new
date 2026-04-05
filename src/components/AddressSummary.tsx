import SummeryBarChart from './charts/SummeryBarChart';
import Card from './Card';




interface AddressSummaryProps {
  totalFreeAddresses: number,
  totalReservedAddresses: number,
  totalDynamicAddresses: number
}


const AddressSummary = ({totalFreeAddresses, totalReservedAddresses, totalDynamicAddresses }: AddressSummaryProps) => {

  const data = [
    { name: 'free', value: totalFreeAddresses, fill: 'var(--color-address-free)', },
    { name: 'dynamic', value: totalReservedAddresses, fill: 'var(--color-address-dynamic)', },
    { name: 'reserved', value: totalDynamicAddresses, fill: 'var(--color-address-reserved)', },
  ];

  return (
    <Card className="flex flex-col gap-3 w-fit">
      <Card.title text="Address Summery" />
      <SummeryBarChart data={data} className='w-48 h-40' />
      <div className="flex flex-col text-primary-text gap-4">

        <ul className="gap-1 flex flex-col">
          {data.map((ipType) =>
            <li key={ipType.name} className="flex items-center gap-2 text-sm">
              <div className="size-[14px] rounded-[3px]" style={{ backgroundColor: `${ipType.fill}` }} />
              <span className="capitalize">{ipType.name} Addresses</span>
            </li>
          )}
        </ul>
       {/*  <p className="text-sm ">Total Allocated Addresses: {totalAllocatedAddresses}</p> */}
      </div>
    </Card>
  );
};



export default AddressSummary;

