import { cn } from '@/lib/utils/cn';

const UsageBar = ({ usagePercentage }: { usagePercentage: number }) => {
  const statusColor =
    usagePercentage < 70
      ? "bg-green-600"
      : usagePercentage < 80
        ? "bg-yellow-500"
        : usagePercentage < 90
          ? "bg-orange-500"
          : "bg-red-500";
  return (
    <div className="flex flex-row gap-2 items-center">
      <span>{usagePercentage}%</span>
      <div className="h-3 w-full min-w-10 bg-gray-300 rounded-lg">
        <div
          style={{ width: `${usagePercentage}%` }}
          className={cn("h-full rounded-lg", statusColor)}
        ></div>
      </div>
    </div>
  );
};

export default UsageBar;
