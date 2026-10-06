// SkinCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { SkinsCard } from "./SkinsCard";
import demoImg from "../../assets/img/StatTrak™ AK-47 _ The Oligarch (Battle-Scarred).webp";

const meta: Meta<typeof SkinsCard> = {
  title: "Skins/SkinsCard",
  component: SkinsCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkinsCard>;

export const PriceUp: Story = {
  args: {
    SkinData: { img: demoImg, name: "AK-47 | The Oligarch", wear: "Factory New", price: 140.5, priceChange: 5.05 },
  },
};

export const PriceDown: Story = {
  args: {
    SkinData: { img: demoImg, name: "AK-47 | The Oligarch", wear: "Minimal Wear", price: 140.5, priceChange: -3.15 },
  },
};

export const LongName: Story = {
  args: {
    SkinData: { img: demoImg, name: "StatTrak™ Butterfly Knife | Doppler Phase 2", wear: "Factory New", price: 1240, priceChange: 2.4 },
  },
};