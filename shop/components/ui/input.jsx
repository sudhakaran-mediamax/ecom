import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, variant, value, onChange, ...props }, ref) => {
    const renderNumberInput = () => (
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => onChange(Math.max(value - 1, props.min || 0))}
          className="flex items-center justify-center h-10 w-10 border border-slate-200 rounded-l-md bg-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          -
        </button>
        <input
          type="number"
          className={cn(
            "flex h-10 w-full min-w-12 text-center rounded-none border-t border-b border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          value={value}
          onChange={(e) =>
            onChange(
              e.target.value.toString().length > 2 ? 30 : Number(e.target.value)
            )
          }
          ref={ref}
          {...props}
        />
        <button
          type="button"
          onClick={() =>
            onChange((prevValue) =>
              Math.min(prevValue + 1, props.max || Infinity)
            )
          }
          className="flex items-center justify-center h-10 w-10 border border-slate-200 rounded-r-md bg-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          +
        </button>
      </div>
    );
    return type === "number" ? (
      renderNumberInput()
    ) : (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b border-slate-200 focus-visible:border-black/40 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
