import React from "react";
import { observer } from "@formily/reactive-react";
import { DroppableWidget } from "@designable/react";
import "./styles.scoped.less";

export const Container: React.FC = observer((props) => {
  return <DroppableWidget>{props.children}</DroppableWidget>;
});

export const withContainer = (Target: any) => {
  function Component(props: any) {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    );
  }

  return function (props: any) {
    return <Component {...props} />;
  };
};
