import { Engine, ITreeNode } from "@designable/core";
import {
  IFormilySchema,
  transformToSchema,
  transformToTreeNode,
} from "@designable/formily-transformer";
import { message } from "antd";

export const saveSchema = (designer: Engine) => {
  const schema = JSON.stringify(transformToSchema(designer.getCurrentTree()));
  localStorage.setItem("formily-schema", schema);
  message.success("Успешно сохранено");
};

export const loadInitialSchema = (designer: Engine, json: IFormilySchema) => {
  const tree: ITreeNode = transformToTreeNode(
    Object.keys(json).length !== 0 ? json : JSON.parse(localStorage.getItem("formily-schema"))
  );
  try {
    designer.setCurrentTree(tree);
  } catch {}
};
