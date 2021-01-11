/* eslint react/prop-types: 0 */
import React from "react";
import Head from "next/head";
import { TemplateBase } from "../components/template-base";
import { TemplateHome } from "../components/template-home";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData, siteTitle, introductionText }) {
  return (
    <TemplateBase>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TemplateHome
        profileImageUrl="/images/profile.jpg"
        profileImageAltText="Profile image alt text description"
        headerTitle={siteTitle}
        {...{ introductionText, allPostsData }}
      />
    </TemplateBase>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const introductionText = `This is a simple boilerpate for Next.js powered websites using StoryBook for component driven development.

For more information on Next.js, check out the official [docs](https://nextjs.org/docs/getting-started)

For more information on StoryBook, check out the official [docs](https://storybook.js.org/docs/react/get-started/introduction)
`;

  const siteTitle = "Test site title";

  return {
    props: {
      allPostsData,
      siteTitle,
      introductionText,
    },
  };
}
