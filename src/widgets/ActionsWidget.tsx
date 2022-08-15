import React, { useEffect } from "react";
import { Space, Button, Radio } from "antd";
import { useDesigner, TextWidget, useTree } from "@designable/react";
import { GlobalRegistry, TreeNode } from "@designable/core";
import { observer } from "@formily/react";
import { loadInitialSchema, saveSchema } from "../service";
import { IFormilySchema, transformToSchema } from "@designable/formily-transformer";

interface TeslerFormBuilderProps {
  onSave?: (json: IFormilySchema) => void;
  onPublish?: (json: IFormilySchema) => void;
}

export const ActionsWidget = observer(({ onSave, onPublish }: TeslerFormBuilderProps) => {
  const tree = useTree();

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
      <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: "Русский", value: "ru-ru" },
          { label: "English", value: "en-us" },
        ]}
        onChange={e => {
          GlobalRegistry.setDesignerLanguage(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          saveSchema(designer);
          onSave(transformToSchema(tree));
        }}
      >
        <TextWidget>Сохранить</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer);
          onPublish(transformToSchema(tree));
        }}
      >
        <TextWidget>Опубликовать</TextWidget>
      </Button>
    </Space>
  );
});
