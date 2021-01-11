import React from "react";
import { Header } from "./header";
import ProfileImage from "../../../public/images/profile.jpg";

const config = {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

const Small = Template.bind({});
Small.args = {
  profileImageUrl: ProfileImage,
  profileImageAltText: "Profile image alt text",
  headerTitle: "Header component title",
};

const Large = Template.bind({});
Large.args = {
  ...Small.args,
  size: "large",
};

export { Small, Large };
export default config;
