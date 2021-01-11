import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import siteConfig from "../../content/site-config.json";

const Header = ({ size = "small" }) => {
  return (
    <header className={cn("header", `header__${size}`)}>
      <img
        src={siteConfig.profileImageUrl}
        className="header--image"
        alt={siteConfig.profileImageAltText}
      />
      <h2 className="header--title">{siteConfig.siteTitle}</h2>
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
