import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import MainPage from "./mainPage";

const meta = {
  title: "Pages/MainPage",
  component: MainPage,

  parameters: {
    layout: "fullscreen",
  },

  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
