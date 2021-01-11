import React from "react";
import { FormattedDate } from "./formatted-date";

const config = {
  title: "Components/Formatted Date",
  component: FormattedDate,
};

const Template = (args) => <FormattedDate {...args} />;

const Default = Template.bind({});
Default.args = {
  dateString: "2021-01-01",
};

export { Default };
export default config;
