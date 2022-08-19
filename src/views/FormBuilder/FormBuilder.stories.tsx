import React, { useCallback, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Input from "antd/lib/input";
import FormBuilder from "./index";
import DEV from "../../common/DEV";
import { IFormilySchema } from "@designable/formily-transformer";

const FormBuilderStory = {
  title: "FormBuilder",
  component: FormBuilder,
} as ComponentMeta<typeof FormBuilder>;

export default FormBuilderStory;

interface IFormilySchemaContext extends IFormilySchema {
  context?: IActionsValues;
}

export const Primary: React.FC = (args) => {
  const [json, setJson] = useState<IFormilySchemaContext>({});
  const changeJson = useCallback((jsonValue: IFormilySchemaContext) => setJson(jsonValue), []);

  return (
    <>
      <FormBuilder
        initialJson={json}
        onSave={changeJson}
        onPublish={changeJson}
        {...args}
      />
      <DEV json={json} />
    </>
  );
};

export const Initial: React.FC = (args) => {
  const [json, setJson] = useState<IFormilySchemaContext>({
    form: {
      labelCol: 6,
      wrapperCol: 12,
    },
    schema: {
      type: "object",
      properties: {
        asd: {
          type: "string",
          title: "Input",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          "x-index": 0,
        },
        dsa: {
          type: "string",
          title: "TextArea",
          "x-decorator": "FormItem",
          "x-component": "Input.TextArea",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          "x-index": 1,
        },
      },
    },
  });
  const changeJson = useCallback((jsonValue: IFormilySchemaContext) => setJson(jsonValue), []);

  return (
    <>
      <FormBuilder
        initialJson={json}
        onSave={changeJson}
        onPublish={changeJson}
        {...args}
      />
      <DEV json={json} />
    </>
  );
};

interface IActionsValues {
  product?: string | null | undefined;
  version?: string | null | undefined;
}
interface IActionsComponent {
  values: IActionsValues;
  onChange: (values: IActionsValues) => void;
}

const ActionsComponent: React.FC<IActionsComponent> = ({ values, onChange }) => {
  return (
    <>
      <Input
        placeholder="Продукт"
        defaultValue={values?.product}
        onChange={(event) =>
          onChange({
            product: event.target.value,
          })
        }
        style={{ marginRight: 4 }}
      />
      <Input
        placeholder="Версия"
        defaultValue={values?.version}
        onChange={(event) =>
          onChange({
            version: event.target.value,
          })
        }
      />
    </>
  );
};

export const Actions: React.FC = (args) => {
  const [reqJson, setReqJson] = useState<IFormilySchemaContext>({});

  const [json, setJson] = useState<IFormilySchemaContext>({});
  const onSave = useCallback((jsonValue: IFormilySchemaContext) => {
    setJson(jsonValue);
  }, []);

  const [values, setValues] = useState({
    product: null,
    version: null,
  });
  const onChangeActions = useCallback(
    (newValues) =>
      setValues((prevValues) => {
        return { ...prevValues, ...newValues };
      }),
    []
  );

  const onPublish = useCallback(
    (jsonValue: IFormilySchemaContext) => {
      onSave(jsonValue);
      setReqJson({
        ...jsonValue,
        context: values,
      });
    },
    [onSave, values]
  );

  return (
    <>
      <FormBuilder
        initialJson={json}
        onSave={onSave}
        onPublish={onPublish}
        actions={
          <ActionsComponent
            values={values}
            onChange={onChangeActions}
          />
        }
        {...args}
      />
      <DEV
        title="RAW"
        json={json}
      />
      <DEV
        title="RESULT"
        json={reqJson}
      />
    </>
  );
};

export const ActionsInitial: React.FC = (args) => {
  const [reqJson, setReqJson] = useState<IFormilySchemaContext>({
    context: {
      product: "ASD",
      version: "1.0",
    },
    form: {
      labelCol: 6,
      wrapperCol: 12,
    },
    schema: {
      type: "object",
      properties: {
        "input-id": {
          type: "string",
          title: "Input",
          "x-decorator": "FormItem",
          "x-component": "Input",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          "x-index": 0,
        },
        "textArea-id": {
          type: "string",
          title: "TextArea",
          "x-decorator": "FormItem",
          "x-component": "Input.TextArea",
          "x-validator": [],
          "x-component-props": {},
          "x-decorator-props": {},
          "x-index": 1,
        },
      },
    },
  });

  const {
    context = {
      product: null,
      version: null,
    },
    ...rawJson
  } = reqJson;

  const [json, setJson] = useState<IFormilySchemaContext>(rawJson);
  const onSave = useCallback((jsonValue: IFormilySchemaContext) => {
    setJson(jsonValue);
  }, []);

  const [values, setValues] = useState(context);
  const onChangeActions = useCallback(
    (newValues) =>
      setValues((prevValues) => {
        return { ...prevValues, ...newValues };
      }),
    []
  );

  const onPublish = useCallback(
    (jsonValue: IFormilySchemaContext) => {
      onSave(jsonValue);
      setReqJson({
        ...jsonValue,
        context: values,
      });
    },
    [onSave, values]
  );

  return (
    <>
      <FormBuilder
        initialJson={json}
        onSave={onSave}
        onPublish={onPublish}
        actions={
          <ActionsComponent
            values={values}
            onChange={onChangeActions}
          />
        }
        {...args}
      />
      <DEV
        title="RAW"
        json={json}
      />
      <DEV
        title="RESULT"
        json={reqJson}
      />
    </>
  );
};
