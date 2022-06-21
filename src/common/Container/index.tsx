import React from "react";
import { observer } from "@formily/reactive-react";
import { DroppableWidget } from "@designable/react";
import "./styles.less";

export const Container: React.FC = observer((props) => {
  return <DroppableWidget>{props.children}</DroppableWidget>;
});

export const withContainer = (Target: React.JSXElementConstructor<any>) => {
  const Component = (props: any) => {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    );
  };

  return (props: any) => <Component {...props} />;
};
