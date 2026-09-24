import type { Meta, StoryObj } from "@storybook/react";
import { DropDownListPriceFilter } from "./dropDownList";

const meta: Meta<typeof DropDownListPriceFilter> = {
  title: "Filters/DropDownListPriceFilter",
  component: DropDownListPriceFilter,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Дропдаун сортировки по цене. Внутреннее состояние (открыт/закрыт, выбранный порядок) " +
          "живёт внутри компонента — снаружи доступен только колбэк `onChange`.",
      },
    },
  },
  args: {
    onChange: (order) => console.log("price filter changed:", order),
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
type Story = StoryObj<typeof DropDownListPriceFilter>;

/** Базовое, закрытое состояние — дефолтная иконка (ChevronsDown), фильтр не выбран. */
export const Default: Story = {};

/** Узкий вьюпорт. */
export const MobileViewport: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};