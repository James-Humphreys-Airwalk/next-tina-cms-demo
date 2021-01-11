import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const siteTitle = "Next.js Storybook boilerplate";

const TemplateBase = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A simple boilerplate for web development using Next.js and StoryBook"
        />
      </Head>
      {children}
    </React.Fragment>
  );
};

TemplateBase.propTypes = {
  children: PropTypes.node,
};

export { TemplateBase, siteTitle };
