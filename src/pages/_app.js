/* eslint react/prop-types: 0 */
import React, { useMemo } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: true,
      sidebar: true,
      toolbar: true,
    });
  }, []);

  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}
