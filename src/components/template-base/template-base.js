import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const TemplateBase = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </React.Fragment>
  );
};

TemplateBase.propTypes = {
  children: PropTypes.node,
};

export { TemplateBase };
