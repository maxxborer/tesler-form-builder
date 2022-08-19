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

export const loadInitialSchema = (designer: Engine, json?: IFormilySchema) => {
  const jsonLocal = localStorage.getItem("formily-schema");

  let jsonForTree = {};

  if (!!json && Object.keys(json).length !== 0) {
    jsonForTree = json;
  } else if (!!jsonLocal) {
    jsonForTree = JSON.parse(jsonLocal || "{}");
  }

  const tree: ITreeNode = transformToTreeNode(jsonForTree);

  try {
    designer.setCurrentTree(tree);
  } catch {}
};
