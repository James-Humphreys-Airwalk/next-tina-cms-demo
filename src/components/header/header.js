import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Header = ({
  profileImageUrl,
  profileImageAltText,
  headerTitle,
  size = "small",
}) => {
  return (
    <header className={cn("header", `header__${size}`)}>
      <img
        src={profileImageUrl}
        className="header--image"
        alt={profileImageAltText}
      />
      <h2 className="header--title">{headerTitle}</h2>
    </header>
  );
};

Header.propTypes = {
  /**
   The url of the profile image
  */
  profileImageUrl: PropTypes.string,
  /**
   The alternative text for the profile image
  */
  profileImageAltText: PropTypes.string,
  /**
   The main title for the header
  */
  headerTitle: PropTypes.string,
  /**
   The size styling of the header
  */
  size: PropTypes.oneOf(["small", "large"]),
};

export { Header };
