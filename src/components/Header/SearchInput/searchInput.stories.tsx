import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./searchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  name: "Default",
  render: () => <SearchInput />,
};

export const OnDarkBackground: Story = {
  name: "On dark background",
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => <SearchInput />,
};

export const OnLightBackground: Story = {
  name: "On light background",
  parameters: {
    backgrounds: { default: "light" },
  },
  render: () => <SearchInput />,
};

export const WithValue: Story = {
  name: "With value",
  render: () => {
    return <SearchInput />;
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");
    if (input) {
      input.value = "dawgSkins";
      input.dispatchEvent(new Event("input", { bubbles: true }));
    }
  },
};