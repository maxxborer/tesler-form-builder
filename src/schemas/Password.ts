import { ISchema } from "@formily/json-schema";
import { Input } from "./Input";

export const Password: ISchema = {
  type: "object",
  properties: {
    ...(Input.properties as any),
    checkStrength: {
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
