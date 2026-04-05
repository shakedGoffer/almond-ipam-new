import { cn } from '@/lib/utils/cn';
import { PieChart, Pie } from 'recharts';


interface AddressData {
    name: string,
    value: number,
    fill: string,
}

interface GuidPieChartProps {
    data: AddressData[],
    className?: string,
    children?: React.ReactNode,
}

const GuidPieChart = ({ data, className, children }: GuidPieChartProps) => {
    return (
        <div className={cn('relative', className)}>
            <PieChart width="100%" height="100%" data={data} responsive>
                <Pie
                    innerRadius="75%"
                    outerRadius="100%"
                    startAngle={180}
                    endAngle={540}
                    dataKey="value"
                    stroke="none"
                    isAnimationActive={true}
                    animationDuration={1500}>
                </Pie>
            </PieChart>

            {/* Centre Content */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                {children}
            </div>
        </div>
    );
};

export default GuidPieChart;