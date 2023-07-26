import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Loading, LoadingType, LoadingSize } from "./Loading";

const meta = {
  title: "Components/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

const LoadingTypesTemplate: Story = {
  render: () => {
    return (
      <div className="flex items-center justify-center gap-8">
        {(["gradient", "points"] as LoadingType[]).map((t) => (
          <div className="flex flex-col gap-2">
            <div className="h-10 flex items-center justify-center">
              <Loading variant="default" type={t} />
            </div>
            <h3 className="flex justify-center">{t}</h3>
          </div>
        ))}
      </div>
    );
  },
};

const LoadingSizesTemplate: Story = {
  render: () => {
    return (
      <div className="flex justify-center gap-8">
        {(["sm", "default", "lg"] as LoadingSize[]).map((s) => (
          <div className="flex flex-col gap-2">
            <div className="flex flex-1 items-center justify-center">
              <Loading variant="default" type="gradient" size={s} />
            </div>
            <h3 className="flex justify-center">{s}</h3>
          </div>
        ))}
      </div>
    );
  },
};

export const LoadingTypes: Story = {
  ...LoadingTypesTemplate,
  args: {},
};

export const LoadingSizes: Story = {
  ...LoadingSizesTemplate,
  args: {},
};
