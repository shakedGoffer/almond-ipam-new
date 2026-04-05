import { cn } from "@/lib/utils/cn";
import { Bar, BarChart, LabelList } from "recharts";


interface AddressData {
  name: string,
  value: number,
  fill: string,
}

const SummeryBarChart = ({ data, className }: { data: AddressData[], className?: string }) => {
  return (
    <div className={cn('items-center',className)}>
      <BarChart
        width="100%" height="100%" data={data} responsive>
        <Bar dataKey="value" radius={[5, 5, 0, 0]} >
          <LabelList
            dataKey="value" position="insideTop" offset={10}
            style={{ fill: 'var(--color-primary-text)', fontSize: '12px', fontWeight: '500' }}
          />
        </Bar>
      </BarChart>
    </div>
  );
};

export default SummeryBarChart;