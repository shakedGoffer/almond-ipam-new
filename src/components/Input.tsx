
import { forwardRef } from "react";
import { cn } from '@/lib/utils/cn';

// Extend the input element's interface to include custom props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    type?: string,
    error?: string,
    className?: string,
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, className, type = "text", ...props }, ref) => {
    return (
        <div>
            <div className="relative">
                <input type={type} ref={ref} placeholder=" " {...props}
                    className={cn(
                        "block px-3 pb-2.5 pt-4 w-full text-sm text-form-primary-text bg-form-bg rounded-md border appearance-none focus:outline-none focus:ring-0 peer",
                        className, error ? "border-status-error focus:border-status-error" : "border-gray-300 focus:border-primary"
                    )} />
                {label && <label className={cn(
                    "absolute text-sm duration-300 transform bg-form-bg px-2 start-2",
                    "peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4",
                    error ? "text-status-error" : "text-secondary-text peer-focus:text-primary"
                )}>
                    {label}
                </label>}
            </div>
            {error && <p className="text-xs text-status-error mt-1.5 ml-1">{error}</p>}
        </div>
    );
}
);

export default Input;

