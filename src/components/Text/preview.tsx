import React from "react";
import { createBehavior, createResource } from "@designable/core";
import { DnFC } from "@designable/react";
import { createVoidFieldSchema } from "../Field";
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";
import cls from "classnames";
import "./styles.less";

export interface IDesignableTextProps {
  value?: string;
  content?: string;
  mode?: "normal" | "h1" | "h2" | "h3" | "p";
  style?: React.CSSProperties;
  className?: string;
}

export const Text: DnFC<IDesignableTextProps> = ({
  mode, // eslint-disable-line react/prop-types
  className, // eslint-disable-line react/prop-types
  content, // eslint-disable-line react/prop-types
  ...props
}) => {
  const tagName = mode === "normal" || !mode ? "div" : mode;
  return React.createElement(
    tagName,
    {
      mode,
      content,
      ...props,
      className: cls(className, "dn-text"),
      "data-content-editable": "x-component-props.content",
    },
    content,
  );
};

Text.Behavior = createBehavior({
  name: "Text",
  extends: ["Field"],
  selector: (node) => node.props["x-component"] === "Text",
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Text),
  },
  designerLocales: AllLocales.Text,
});

Text.Resource = createResource({
  icon: "TextSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "string",
        "x-component": "Text",
      },
    },
  ],
});
