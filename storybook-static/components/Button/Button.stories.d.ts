import React from "react";
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<import("./Button").ButtonProps & React.RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        rounded: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Destructive: Story;
export declare const Outline: Story;
export declare const Ghost: Story;
export declare const Link: Story;
export declare const WithIcon: Story;
//# sourceMappingURL=Button.stories.d.ts.map