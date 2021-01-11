/* eslint react/prop-types: 0 */
import React, { useMemo } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
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

  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: process.env.NODE_ENV !== "production",
      sidebar: true,
      toolbar: true,
      plugins: [PostCreatorPlugin],
    });
  }, []);

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}
