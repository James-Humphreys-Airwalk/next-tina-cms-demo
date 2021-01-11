import { withNextRouter } from "storybook-addon-next-router";
import { addDecorator } from "@storybook/react";
import "../src/global-styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
};

// Add support for Next.js Link routing
// https://github.com/lifeiscontent/storybook-addon-next-router#readme
addDecorator(
  withNextRouter({
    path: "/",
    asPath: "/",
    query: {},
    push(path) {
      return new Promise((resolve, reject) => resolve());
    },
  })
);
