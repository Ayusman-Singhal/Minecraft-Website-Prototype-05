import React from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "destructive";
  size?: "sm" | "md" | "lg";
}

export const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-[#7289da] text-white border-white/20 shadow-[0_6px_0_0_#4e5d94] hover:shadow-[0_4px_0_0_#4e5d94] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]",
      secondary: "bg-[#43b581] text-white border-white/20 shadow-[0_6px_0_0_#2d7a57] hover:shadow-[0_4px_0_0_#2d7a57] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]",
      accent: "bg-[#faa61a] text-white border-white/20 shadow-[0_6px_0_0_#a97011] hover:shadow-[0_4px_0_0_#a97011] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]",
      destructive: "bg-[#f04747] text-white border-white/20 shadow-[0_6px_0_0_#a23030] hover:shadow-[0_4px_0_0_#a23030] hover:translate-y-[2px] active:shadow-none active:translate-y-[6px]",
    };

    const sizes = {
      sm: "px-3 py-1 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative font-display uppercase tracking-widest transition-all duration-75 ease-out border-2 border-b-0",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
PixelButton.displayName = "PixelButton";
