import type { Meta, StoryObj } from "@storybook/react";
import { Catigories } from "./buttonCatigories";

const meta: Meta<typeof Catigories> = {
  title: "Filters/Catigories",
  component: Catigories,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Панель фильтров по категориям скинов",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Catigories>;

/** Базовое состояние. */
export const Default: Story = {};

/** Проверка на тёмном фоне, близком к боевому. */
export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: 16, background: "#1a0a2e" }}>
        <Story />
      </div>
    ),
  ],
};

/** Узкий вьюпорт — 10 кнопок в ряд наверняка не влезут, стоит увидеть, что с ними происходит. */
export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};