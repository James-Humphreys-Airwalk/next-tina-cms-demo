/* eslint react/prop-types: 0 */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useForm, usePlugin } from "tinacms";
import { InlineForm } from "react-tinacms-inline";
import { InlineWysiwyg } from "react-tinacms-editor";
import { FormattedDate } from "../components/formatted-date";
import { Header } from "../components/header";
import { TemplateBase } from "../components/template-base";
import { getPostPageData, getSortedPostsData } from "../lib/posts";

export default function Home({
  allPostsData,
  homePageData: initialHomePageData,
}) {
  const formConfig = {
    id: initialHomePageData.id,
    label: "Edit Page",
    fields: [
      {
        name: "title",
        label: "Page title",
        component: "text",
      },
      {
        name: "date",
        label: "Publication date",
        component: "date",
        dateFormat: "YYYY-MM-DD",
        timeFormat: false,
      },
    ],
    initialValues: initialHomePageData,
    onSubmit: async (changes) => {
      console.log("Saved!", changes);
    },
  };

  const [modifiedValues, form] = useForm(formConfig);
  usePlugin(form);

  return (
    <InlineForm form={form}>
      <TemplateBase>
        <Head>
          <title>{modifiedValues.title}</title>
        </Head>
        <div className="home container">
          <Header size="large" />
          <section className="headingMd">
            <InlineWysiwyg name="rawMarkdownBody" format="markdown">
              <ReactMarkdown>{modifiedValues.rawMarkdownBody}</ReactMarkdown>
            </InlineWysiwyg>
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
    </InlineForm>
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
