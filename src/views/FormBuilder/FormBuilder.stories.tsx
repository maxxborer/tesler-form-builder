import React, { useCallback, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IFormilySchema } from "@designable/formily-transformer";
import FormBuilder from "./index";
import DEV from "../../common/DEV";

const FormBuilderStory = {
  title: "FormBuilder",
  component: FormBuilder,
} as ComponentMeta<typeof FormBuilder>;

export default FormBuilderStory;

const Template: ComponentStory<typeof FormBuilder> = args => {
  const [json, setJson] = useState<IFormilySchema>({});
  const changeJson = useCallback((jsonValue: IFormilySchema) => setJson(jsonValue), []);

  return (
    <>
      <FormBuilder initialJson={json} onSave={changeJson} onPublish={changeJson} {...args} />
      <DEV json={json} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "FormBuilder",
};
