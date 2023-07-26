import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Loading } from "../Loading/Loading";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rounded: {
      options: ["none", "md", "full"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button Primary",
    rounded: "full",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button Link",
  },
};

export const ButtonLoading: Story = {
  args: {
    variant: "outline",
    size: "default",
    disabled: true,
    children: (
      <span className="flex items-center gap-4">
        <Loading type="points" size="sm" />
        Loading...
      </span>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: <span className="flex items-center gap-4">&#8457;</span>,
  },
};
