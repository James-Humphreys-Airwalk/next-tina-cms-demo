/* eslint react/prop-types: 0 */
import React from "react";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
