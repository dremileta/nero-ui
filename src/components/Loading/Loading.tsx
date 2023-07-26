import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const loadingVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "border-primary bg-primary",
    },
    type: {
      gradient: "",
      points: "",
    },
    size: {
      default: "w-10 h-10",
      sm: "w-6 h-6",
      lg: "w-14 h-14",
    },
  },
  compoundVariants: [
    {
      type: "points",
      size: "default",
      className: ["w-2", "h-2", "[--pointsSize:0.5rem]"],
    },
    {
      type: "points",
      size: "sm",
      className: ["w-1", "h-1", "[--pointsSize:0.25rem]"],
    },
    {
      type: "points",
      size: "lg",
      className: ["w-4", "h-4", "[--pointsSize:1rem]"],
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    type: "gradient",
  },
});

export interface LoadingProps
  extends React.BaseHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {}

export type LoadingType = NonNullable<
  Pick<VariantProps<typeof loadingVariants>, "type">["type"]
>;

export type LoadingSize = NonNullable<
  Pick<VariantProps<typeof loadingVariants>, "size">["size"]
>;

const LoadingPoint = ({ className }: { className: string }) => {
  return <span className={className}></span>;
};

const LoadingPoints = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className.match(
        /\[.*\]/gi
      )} flex items-center justify-center gap-1 relative translate-y-[calc(var(--pointsSize)/2*-1)]`}
    >
      <LoadingPoint
        className={`${className} animate-[points-bounce_0.75s_ease_infinite]`}
      />
      <LoadingPoint
        className={`${className} animate-[points-bounce_0.75s_ease_infinite_0.25s]`}
      />
      <LoadingPoint
        className={`${className} animate-[points-bounce_0.75s_ease_infinite_0.5s]`}
      />
    </div>
  );
};

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant, size, type = "gradient", ...props }, ref) => {
    const Inner = () => {
      switch (type) {
        case "gradient":
          return (
            <div className="flex items-center justify-center">
              <div
                className={cn(
                  loadingVariants({ variant, size }),
                  "bg-transparent border-t-2 animate-spin rounded-full"
                )}
              ></div>
            </div>
          );
        case "points":
          return (
            <LoadingPoints
              className={cn(
                loadingVariants({ variant, type, size }),
                "rounded-full"
              )}
            />
          );
        default:
          break;
      }
    };

    return (
      <div className="relative " ref={ref} {...props}>
        <Inner />
      </div>
    );
  }
);

Loading.displayName = "Loading";

export { Loading, loadingVariants };
