import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border rounded-lg px-3 py-2 text-base file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-secondary outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:text-disabled disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
