// TeslerFormBuilder.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import TeslerFormBuilder from "./TeslerFormBuilder";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TeslerFormBuilder",
  component: TeslerFormBuilder,
} as ComponentMeta<typeof TeslerFormBuilder>;

export const Primary: ComponentStory<typeof TeslerFormBuilder> = () => <TeslerFormBuilder />;
