import { cn } from '@/lib/utils/cn';


export default function Logo({ expanded }: { expanded?: boolean; }) {
    return (
        <div className="flex flex-row items-center whitespace-nowrap overflow-hidden ">
            <LogoIcon  className={'size-10'} />
            <div className={cn("flex flex-col font-logo transition-all duration-500 ease-in-out overflow-hidden",
                expanded ? " w-auto opacity-100 ml-2 " : "max-w-0 opacity-0 ml-0")} >
                <span className="text-3xl leading-none">ALMOND</span>
                <span className="text-md leading-none ">IP MANAGEMENT</span>
            </div>
        </div>
    );
}


export const LogoIcon = ({ className }: { className: string }) => (
    <img
        src={'/src/assets/almond-icon.png'}
       className={className}
    />
);



export const LogoFull = () => (
    <div className='flex flex-row items-center font-logo h-fit w-fit'>
        <LogoIcon className={'siz-40'} />
        <span className='text-4xl'>Almond IPAM</span>
    </div>
);
