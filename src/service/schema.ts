import { Engine } from "@designable/core";
import {
  IFormilySchema,
  transformToSchema,
  transformToTreeNode,
} from "@designable/formily-transformer";
import { message } from "antd";

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    "formily-schema",
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  );
  message.success("Успешно сохранено");
};

export const loadInitialSchema = (designer: Engine, json: IFormilySchema) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(
        Object.keys(json).length !== 0 ? json : JSON.parse(localStorage.getItem("formily-schema"))
      )
    );
  } catch {}
};
