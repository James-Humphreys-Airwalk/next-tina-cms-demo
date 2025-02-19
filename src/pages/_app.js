/* eslint react/prop-types: 0 */
import React, { useMemo } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import {
  GithubClient,
  TinacmsGithubProvider,
  GithubMediaStore,
} from "react-tinacms-github";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  const github = new GithubClient({
    proxy: "/api/proxy-github",
    authCallbackRoute: "/api/create-github-access-token",
    clientId: process.env.GITHUB_CLIENT_ID,
    baseRepoFullName: process.env.REPO_FULL_NAME, // e.g: tinacms/tinacms.org,
    baseBranch: process.env.BASE_BRANCH, // e.g. 'master' or 'main' on newer repos
  });

  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: !!pageProps.preview,
      apis: {
        github,
      },
      media: new GithubMediaStore(github),
      sidebar: pageProps.preview,
      toolbar: pageProps.preview,
    });
  }, []);

  return (
    <TinaProvider cms={cms}>
      <TinacmsGithubProvider
        onLogin={onLogin}
        onLogout={onLogout}
        error={pageProps.error}
      >
        <Component {...pageProps} />
      </TinacmsGithubProvider>
    </TinaProvider>
  );
}

const onLogin = async () => {
  const token = localStorage.getItem("tinacms-github-token") || null;
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", "Bearer " + token);
  }

  const resp = await fetch(`/api/preview`, { headers: headers });
  const data = await resp.json();

  if (resp.status == 200) window.location.href = window.location.pathname;
  else throw new Error(data.message);
};

const onLogout = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};
