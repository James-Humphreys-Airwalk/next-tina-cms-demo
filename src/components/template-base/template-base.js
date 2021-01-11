import React from "react";
import Head from "next/head";
import { useCMS } from "tinacms";
import PropTypes from "prop-types";

const TemplateBase = ({ children }) => {
  const cms = useCMS();
  const handleOnEnableCMSClick = () => cms.enable();

  const PostCreatorPlugin = {
    __type: "content-creator",
    name: "Post",
    initialValues: {
      draft: true,
    },
    fields: [
      {
        label: "Title",
        name: "title",
        component: "text",
        validate(title) {
          if (!title) return "Required.";
        },
      },
      {
        label: "Date",
        name: "date",
        component: "date",
        dateFormat: "YYYY-MM-DD",
        description: "The default will be today.",
      },
      {
        name: "draft",
        label: "Draft",
        component: "toggle",
      },
      {
        name: "markdownBody",
        label: "Post content",
        component: "markdown",
      },
    ],
    onSubmit(values) {
      // Call functions that create the new blog post. For example:
      //cms.apis.someBackend.createPost(values);
      console.log(values);
    },
  };

  cms.plugins.add(PostCreatorPlugin);

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
