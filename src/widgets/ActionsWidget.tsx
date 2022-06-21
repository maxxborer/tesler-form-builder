import React, { useEffect } from "react";
import { Space, Button, Radio } from "antd";
// import { GithubOutlined } from "@ant-design/icons";
import { useDesigner, TextWidget } from "@designable/react";
import { GlobalRegistry } from "@designable/core";
import { observer } from "@formily/react";
import { loadInitialSchema, saveSchema } from "../service";

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  useEffect(() => {
    loadInitialSchema(designer);
  }, []);
  const supportLocales = ["ru-ru"];
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage("ru-ru");
    }
  }, []);
  return (
    <Space style={{ marginRight: 10 }}>
      {/* <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button> */}
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: "Русский", value: "ru-ru" },
          { label: "English", value: "en-us" },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value);
        }}
      />
      {/* <Button href="https://github.com/alibaba/designable" target="_blank">
        <GithubOutlined />
        Github
      </Button> */}
      <Button
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Сохранить</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer);
        }}
      >
        <TextWidget>Опубликовать</TextWidget>
      </Button>
    </Space>
  );
});
