import type { Meta, StoryObj } from "@storybook/react";
import { ListOfCurrencies } from "./dropDownListOfCurrencies";

const meta: Meta<typeof ListOfCurrencies> = {
  title: "Components/ListOfCurrencies",
  component: ListOfCurrencies,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Кастомный выпадающий список валют (USD / RUB) с иконками. " +
          "Состояние (открыт/закрыт, выбранная валюта) управляется внутри компонента. " +
          "По умолчанию выбрана валюта **USD**, список закрыт.",
      },
    },
  },
  argTypes: {
    // у компонента нет пропсов — оставляем пустым,
    // но можно задокументировать это явно:
    // (argTypes заполняется автоматически из props, здесь оставляем по умолчанию)
  },
};

export default meta;
type Story = StoryObj<typeof ListOfCurrencies>;

/**
 * Базовое состояние — список закрыт, выбрана USD.
 * Chevron смотрит вниз, иконка — доллар.
 */
export const Default: Story = {};

/**
 * Открытое состояние. Достигается кликом по триггеру.
 * В панели Actions видно, как срабатывает toggle.
 */
export const Opened: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger);
  },
};

/**
 * Выбор валюты RUB: клик по триггеру → клик по пункту RUB.
 * После выбора список закрывается, иконка меняется на рубль.
 */
export const RubleSelected: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger);

    const rubButton = canvas.getByRole("button", { name: /RUB/i });
    await userEvent.click(rubButton);
  },
};

/**
 * Открытие → закрытие. Проверяет, что toggle работает в обе стороны.
 */
export const ToggleTwice: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");
    await userEvent.click(trigger); // открыть
    await userEvent.click(trigger); // закрыть
  },
};

/**
 * Проверка доступности: `aria-expanded` должен отражать состояние.
 */
export const AriaExpandedReflectsState: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  },
};

/**
 * На тёмном фоне — проверить контраст иконок и текста.
 */
export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};

/**
 * Несколько компонентов рядом — визуальная проверка отступов и независимости состояний.
 */
export const Multiple: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: 32,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h4 style={{ marginBottom: 8 }}>Закрыт</h4>
        <ListOfCurrencies />
      </div>
      <div>
        <h4 style={{ marginBottom: 8 }}>Открыт</h4>
        <ListOfCurrencies />
      </div>
      <div>
        <h4 style={{ marginBottom: 8 }}>Тёмный фон</h4>
        <div style={{ background: "#1a1a1a", padding: 16, borderRadius: 8 }}>
          <ListOfCurrencies />
        </div>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const triggers = canvas.getAllByRole("button", { name: "" });
    // открываем только второй экземпляр
    await userEvent.click(triggers[1]);
  },
  parameters: {
    docs: {
      description: {
        story:
          "Три экземпляра компонента. Второй открывается через `play`, чтобы показать независимость состояний.",
      },
    },
  },
};