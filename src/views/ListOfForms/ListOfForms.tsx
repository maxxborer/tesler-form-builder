import React, { useMemo } from "react";
import { createForm, IFormFeedback } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  DatePicker,
  Checkbox,
  Cascader,
  Editable,
  Input,
  NumberPicker,
  Switch,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  Space,
  Submit,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
  FormGrid,
  FormLayout,
  FormTab,
  FormCollapse,
  FormButtonGroup,
  ArrayTable,
  ArrayCards,
} from "@formily/antd";
import { Card, Slider, Rate } from "antd";
import { IFormilySchema } from "@designable/formily-transformer";

const Text: React.FC<{
  value?: string;
  content?: string;
  mode?: "normal" | "h1" | "h2" | "h3" | "p";
}> = ({ value, mode, content, ...props }) => {
  const tagName = mode === "normal" || !mode ? "div" : mode;
  return React.createElement(tagName, props, value || content);
};

const SchemaField = createSchemaField({
  components: {
    Space,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    Text,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    Card,
    Slider,
    Rate,
  },
});

export interface IListOfFormsProps {
  json: IFormilySchema;
  submitTitle: string;
  style?: React.CSSProperties;
  onClickSubmit?: (e: React.MouseEvent<Element, MouseEvent>) => any;
  onSubmit?: (values: any) => Promise<any> | any;
  onSubmitSuccess?: (payload: any) => void;
  onSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
}

export const ListOfForms: React.FC<IListOfFormsProps> = ({
  json,
  submitTitle = "Отправить",
  style,
  onClickSubmit,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailed,
}) => {
  const form = useMemo(() => createForm(), []);
  return (
    <div style={style}>
      <Form
        {...json?.form}
        form={form}
      >
        <SchemaField schema={json?.schema} />
        <FormButtonGroup.FormItem>
          <Submit
            onSubmit={onSubmit}
            onSubmitSuccess={onSubmitSuccess}
            onSubmitFailed={onSubmitFailed}
            onClick={onClickSubmit}
          >
            {submitTitle}
          </Submit>
        </FormButtonGroup.FormItem>
      </Form>
    </div>
  );
};
