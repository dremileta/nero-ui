import React from "react";
import { VariantProps } from "class-variance-authority";
declare const loadingVariants: (props?: ({
    variant?: "default" | null | undefined;
    type?: "gradient" | "points" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface LoadingProps extends React.BaseHTMLAttributes<HTMLDivElement>, VariantProps<typeof loadingVariants> {
}
export type LoadingType = NonNullable<Pick<VariantProps<typeof loadingVariants>, "type">["type"]>;
export type LoadingSize = NonNullable<Pick<VariantProps<typeof loadingVariants>, "size">["size"]>;
declare const Loading: React.ForwardRefExoticComponent<LoadingProps & React.RefAttributes<HTMLDivElement>>;
export { Loading, loadingVariants };
//# sourceMappingURL=Loading.d.ts.map