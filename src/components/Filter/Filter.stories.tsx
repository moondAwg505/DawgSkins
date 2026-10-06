import type { Meta, StoryObj } from "@storybook/react";

import Filter from "./Filter";

const meta = {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
