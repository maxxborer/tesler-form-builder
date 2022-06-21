import React from "react";
import { Card as AntdCard } from "antd";

import { createBehavior, createResource } from "@designable/core";
import { DnFC } from "@designable/react";
import { createVoidFieldSchema } from "../Field";
import { AllSchemas } from "../../schemas";
import { AllLocales } from "../../locales";

export const Card: DnFC<React.ComponentProps<typeof AntdCard>> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props;

  return (
    <AntdCard
      {...props}
      title={
        <span data-content-editable="x-component-props.title">{title}</span>
      }
    >
      {children}
    </AntdCard>
  );
};

Card.Behavior = createBehavior({
  name: "Card",
  extends: ["Field"],
  selector: (node) => node.props["x-component"] === "Card",
  designerProps: {
    droppable: true,
    propsSchema: createVoidFieldSchema(AllSchemas.Card),
  },
  designerLocales: AllLocales.Card,
});

Card.Resource = createResource({
  icon: "CardSource",
  elements: [
    {
      componentName: "Field",
      props: {
        type: "void",
        "x-component": "Card",
        "x-component-props": {
          title: "Title",
        },
      },
    },
  ],
});
