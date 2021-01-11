import React from "react";
import { TemplateHome } from "./template-home";
import * as HeaderStories from "../header/header.stories";

const config = {
  title: "Templates/Home",
  component: TemplateHome,
  parameters: {
    layout: "fullscreen",
  },
};

const allPostsData = [
  {
    id: "1",
    date: "2021-01-01",
    title: "Test blog post one",
  },
  {
    id: "2",
    date: "2021-01-02",
    title: "Test blog post two",
  },
  {
    id: "3",
    date: "2021-01-03",
    title: "Test blog post three",
  },
];

const introductionText = `This is a simple boilerpate for Next.js powered websites using StoryBook for component driven development.

For more information on Next.js, check out the official [docs](https://nextjs.org/docs/getting-started)

For more information on StoryBook, check out the official [docs](https://storybook.js.org/docs/react/get-started/introduction)
`;

const Template = (args) => <TemplateHome {...args} />;

const Default = Template.bind({});
Default.args = {
  ...HeaderStories.Small.args,
  allPostsData,
  introductionText,
};

export { Default };
export default config;
