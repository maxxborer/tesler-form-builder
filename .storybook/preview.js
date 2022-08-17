import React from "react";
import { addDecorator } from "@storybook/react";
import "@storybook/addon-console";

addDecorator((story) => <>{story()}</>);
