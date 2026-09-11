import type { Meta, StoryObj } from "@storybook/react";
import { FavoriteButton } from "./favoritsButton";

const meta: Meta<typeof FavoriteButton> = {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  name: "Default",
  render: () => <FavoriteButton />,
};

export const OnDarkBackground: Story = {
  name: "On dark background",
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => <FavoriteButton />,
};

export const OnLightBackground: Story = {
  name: "On light background",
  parameters: {
    backgrounds: { default: "light" },
  },
  render: () => <FavoriteButton />,
};