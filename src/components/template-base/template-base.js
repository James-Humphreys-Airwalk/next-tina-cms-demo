import React from "react";
import Head from "next/head";
import { useCMS } from "tinacms";
import PropTypes from "prop-types";

const TemplateBase = ({ children }) => {
  const cms = useCMS();

  const handleOnEnableCMSClick = () => cms.enable();

  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        {children}
        {cms.disabled && (
          <button className="margin1px" onClick={handleOnEnableCMSClick}>
            Enable CMS
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

TemplateBase.propTypes = {
  children: PropTypes.node,
};

export { TemplateBase };
