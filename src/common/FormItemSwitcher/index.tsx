import React from "react";
import { Switch } from "antd";

export interface IFormItemSwitcherProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const FormItemSwitcher: React.FC<IFormItemSwitcherProps> = ({ value, onChange }) => {
  return (
    <Switch
      checked={value === "FormItem"}
      onChange={eventValue => {
        onChange(!!eventValue ? "FormItem" : "");
      }}
    />
  );
};
