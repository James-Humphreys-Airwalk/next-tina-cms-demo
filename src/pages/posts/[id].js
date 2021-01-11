/* eslint react/prop-types: 0 */
import React from "react";
import Head from "next/head";
import { TemplateBase } from "../../components/template-base";
import { TemplateSinglePost } from "../../components/template-single-post";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({
  profileImageUrl,
  profileImageAltText,
  headerTitle,
  postData,
}) {
  return (
    <TemplateBase>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <TemplateSinglePost
        articleDate={postData.date}
        articleTitle={postData.title}
        articleText={postData.rawMarkdownBody}
        {...{ profileImageUrl, profileImageAltText, headerTitle }}
        backLinkUrl="/"
        backLinkLabel="Back to home"
      />
    </TemplateBase>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const headerTitle = "Test site title";
  const profileImageUrl = "/images/profile.jpg";
  const profileImageAltText = "Profile image alt text description";

  return {
    props: {
      postData,
      headerTitle,
      profileImageUrl,
      profileImageAltText,
    },
  };
}
