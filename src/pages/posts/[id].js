/* eslint react/prop-types: 0 */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FormattedDate } from "../../components/formatted-date";
import { Header } from "../../components/header";
import { TemplateBase } from "../../components/template-base";
import { getAllPostIds, getPostPageData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <TemplateBase>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="single-post container">
        <Header size="small" />
        <article>
          <div>
            <h1 className="headingXl">{postData.title}</h1>
            <span className="lightText">
              <FormattedDate dateString={postData.date} />
            </span>
          </div>
          <div>
            <ReactMarkdown>{postData.rawMarkdownBody}</ReactMarkdown>
          </div>
        </article>
        <div className="back-link">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      </div>
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
  const postData = await getPostPageData(params.id);

  return {
    props: {
      postData,
    },
  };
}
