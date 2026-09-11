import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // если позже появятся пропсы — описываем тут
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  name: "Default",
  render: () => <Logo />,
};

export const OnDarkBackground: Story = {
  name: "On dark background",
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => <Logo />,
};

export const OnLightBackground: Story = {
  name: "On light background",
  parameters: {
    backgrounds: { default: "light" },
  },
  render: () => <Logo />,
};