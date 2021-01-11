/* eslint react/prop-types: 0 */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FormattedDate } from "../components/formatted-date";
import { Header } from "../components/header";
import { TemplateBase } from "../components/template-base";
import { getPostPageData, getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData, homePageData }) {
  return (
    <TemplateBase>
      <Head>
        <title>{homePageData.title}</title>
      </Head>
      <div className="home container">
        <Header size="large" />
        <section className="headingMd">
          <ReactMarkdown>{homePageData.rawMarkdownBody}</ReactMarkdown>
        </section>
        <section className="headingMd padding1px">
          <h2 className="headingLg">Blog</h2>
          <ul className="list">
            {allPostsData.map(({ id, date, title }) => (
              <li className="listItem" key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className="lightText">
                  <FormattedDate dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </TemplateBase>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const homePageData = await getPostPageData("home", "page");

  return {
    props: {
      allPostsData,
      homePageData,
    },
  };
}
