import type { Meta, StoryObj } from "@storybook/react";

import FavoriteButtonOnSkinsCard from "./FavoriteButtonOnSkinsCard";

const meta = {
  title: "Components/FavoriteButtonOnSkinsCard",
  component: FavoriteButtonOnSkinsCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FavoriteButtonOnSkinsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
