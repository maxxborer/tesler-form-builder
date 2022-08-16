import React, { useMemo, useCallback } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListOfForms from "./ListOfForms";
import DEV from "../../common/DEV";
const ListOfFormsStory = {
  title: "ListOfForms",
  component: ListOfForms,
} as ComponentMeta<typeof ListOfForms>;

export default ListOfFormsStory;

const Template: ComponentStory<typeof ListOfForms> = args => {
  const json = useMemo(() => JSON.parse(localStorage.getItem("formily-schema")), []);

  const onClickSubmit = useCallback(e => console.log("submit: click", { e }), []);
  const onSubmit = useCallback(values => console.log("submit: submit", { values }), []);
  const onSubmitSuccess = useCallback(payload => console.log("submit: success", { payload }), []);
  const onSubmitFailed = useCallback(feedbacks => console.log("submit: failed", { feedbacks }), []);

  return (
    <>
      <ListOfForms
        json={json}
        onClickSubmit={onClickSubmit}
        onSubmit={onSubmit}
        onSubmitSuccess={onSubmitSuccess}
        onSubmitFailed={onSubmitFailed}
        {...args}
      />
      <DEV json={json} />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "ListOfForms",
};
