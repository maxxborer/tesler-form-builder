import { ISchema } from "@formily/json-schema";

export const Checkbox: ISchema & { Group?: ISchema } = {
  type: "object",
  properties: {
    autoFocus: {
      type: "boolean",
      "x-decorator": "FormItem",
      "x-component": "Switch",
    },
  },
};
