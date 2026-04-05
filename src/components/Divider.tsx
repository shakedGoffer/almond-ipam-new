import { cn } from '@/lib/utils/cn';

interface DividerProps {
    className?: string;
    vertical?: boolean;
}

const Divider = ({ className, vertical }: DividerProps) => {
    return (
        <div
            className={cn(
                'shrink-0 bg-secondary-text opacity-20 ',
                vertical ? 'h-full w-[1px]' : 'h-[1px] w-full',
                className
            )}
        />
    );
};

export default Divider;