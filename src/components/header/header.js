import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useFormScreenPlugin, useForm } from "tinacms";
import siteConfig from "../../content/site-config.json";

const Header = ({ size = "small" }) => {
  const siteConfigForm = {
    id: "site-config",
    label: "Site Config",
    initialValues: siteConfig,
    fields: [
      {
        name: "siteTitle",
        label: "Site Title",
        component: "text",
      },
    ],
    onSubmit: async (changes) => {
      console.log("Saved!", changes);
    },
  };

  const [modifiedValues, form] = useForm(siteConfigForm);
  useFormScreenPlugin(form);

  return (
    <header className={cn("header", `header__${size}`)}>
      <img
        src={siteConfig.profileImageUrl}
        className="header--image"
        alt={siteConfig.profileImageAltText}
      />
      <h2 className="header--title">{modifiedValues.siteTitle}</h2>
    </header>
  );
};

Header.propTypes = {
  /**
   The size styling of the header
  */
  size: PropTypes.oneOf(["small", "large"]),
};

export { Header };
