import { forwardRef, useId } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";

// Extend the input element's interface to include custom props
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  error?: string;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", className, ...props }, ref) => {
    const id = useId();

    return (
      <div>
        <div className="group relative w-full">
          <label
            htmlFor={id}
            className={cn(
              "p-2 origin-start text-form-primary-text group-focus-within:text-primary has-[+input:not(:placeholder-shown)]:text-primary",
              "absolute top-1/2 block -translate-y-1/2 cursor-text  text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0",
              "group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none",
              "has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs",
              "has-[+input:not(:placeholder-shown)]:font-medium",
              error
                ? "group-focus-within:text-status-error"
                : "group-focus-within:text-primary",
            )}
          >
            <span className="bg-form-bg inline-flex px-1">{label}</span>
          </label>
          <Input
            id={id}
            type={type}
            ref={ref}
            placeholder=" "
            {...props}
            className={cn(
              "py-5 pt-6 text-form-primary-text bg-form-bg border appearance-none focus:outline-none focus:ring-0 peer",
              error
                ? "border-status-error focus:border-status-error"
                : "border-gray-300 focus:border-primary", className
            )}
          />
        </div>
        {error && (
          <p className="text-xs text-status-error mt-1.5 ml-1">{error}</p>
        )}
      </div>
    );
  },
);

export default FormInput;
