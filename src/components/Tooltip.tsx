import { cn } from '@/lib/utils/cn';

type TooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

interface TooltipProps {
  text: string,
  position: TooltipPosition,
}

const Tooltip = ({ text, position }: TooltipProps) => {

  const tooltipPositionClasses: Record<string, string> = {
    top: 'bottom-full mb-3 translate-y-3',
    bottom: 'top-full mt-3 -translate-y-3',
    left: 'right-full mr-3 translate-x-3',
    right: 'left-full ml-3 -translate-x-3',
  };

  const arrowPositionClasses: Record<string, string> = {
    top: 'bottom-[-2px] left-1/2 -translate-x-1/2',
    bottom: 'top-[-2px] left-1/2 -translate-x-1/2',
    left: 'right-[-2px] top-1/2 -translate-y-1/2',
    right: 'left-[-2px] top-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={cn(
        "absolute rounded-md px-2 py-1 bg-gray-700 text-white text-sm invisible transition-all group-hover:visible group-hover:translate-x-0 group-hover:translate-y-0 z-50 whitespace-nowrap shadow-md pointer-events-none",
        tooltipPositionClasses[position],
      )}>
      <div className={cn("absolute rotate-45 h-4 w-4 rounded-sm bg-gray-700 -z-10", arrowPositionClasses[position])} />
      {text}
    </div>
  );
};


export default Tooltip;