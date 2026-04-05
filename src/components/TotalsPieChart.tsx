import GuidPieChart from './charts/GuidPieChart';
interface TotalsPieChartProps {
  number: number;
  subTitle: string
}

const TotalsPieChart = ({ number, subTitle }: TotalsPieChartProps) => {

   const data = [
        { name: 'totalSubnets', value: number, fill: 'var(--color-container-bg-basic)' },
    ];

  return (
      <GuidPieChart data={data} className="size-52">
          <span className="text-xl font-bold text-primary-text"> {number} </span>
          <span className="text-[0.6rem] uppercase text-secondary-text">{subTitle}</span>
      </GuidPieChart>
  );
};

export default TotalsPieChart;