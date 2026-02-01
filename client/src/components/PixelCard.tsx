import React from "react";
import { cn } from "@/lib/utils";

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-[#313338] border-[6px] border-[#1e1f22] p-6 shadow-2xl",
          className
        )}
        {...props}
      >
        {/* Corner Decorators - Hidden for more authentic block look */}
        {/* <div className="absolute -top-1 -left-1 w-2 h-2 bg-background border border-card-border" /> */}
        
        {children}
      </div>
    );
  }
);
PixelCard.displayName = "PixelCard";
