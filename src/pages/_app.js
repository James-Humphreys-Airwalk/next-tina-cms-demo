/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const cms = new TinaCMS({
    enabled: true,
    sidebar: true,
    toolbar: true,
  });

  useEffect(() => {
    import("react-tinacms-date").then(({ DateFieldPlugin }) => {
      cms.plugins.add(DateFieldPlugin);
    });

    import("react-tinacms-editor").then(
      ({ MarkdownFieldPlugin, HtmlFieldPlugin }) => {
        cms.plugins.add(MarkdownFieldPlugin);
        cms.plugins.add(HtmlFieldPlugin);
      }
    );
  }, []);

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}
