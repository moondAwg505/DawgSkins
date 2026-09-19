import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Шапка приложения. Композиция из пяти компонентов: " +
          "`Logo`, `SearchInput`, `FavoriteButton`, `ListOfCurrencies`, `ProfileButton`. " +
          "Пропсов не имеет — вся логика внутри дочерних компонентов.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 16, background: "#1a0a2e" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

/** Базовое состояние — как есть. */
export const Default: Story = {};

/** Проверка на чуть более тёмном фоне, чем основной. */
export const OnDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: 16, background: "#1a1a1a" }}>
        <Story />
      </div>
    ),
  ],
};

/** Узкий вьюпорт — проверяем перенос/сжатие элементов. */
export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};

/** Планшет. */
export const TabletViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};