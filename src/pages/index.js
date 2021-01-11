/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useForm, usePlugin, useCMS } from "tinacms";
import { InlineForm, InlineTextarea } from "react-tinacms-inline";
import { InlineWysiwyg } from "react-tinacms-editor";
import { FormattedDate } from "../components/formatted-date";
import { Header } from "../components/header";
import { TemplateBase } from "../components/template-base";
import { getPostPageData, getSortedPostsData } from "../lib/posts";

export default function Home({
  allPostsData,
  homePageData: initialHomePageData,
}) {
  const cms = useCMS();

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
      {
        name: "draft",
        label: "Draft",
        component: "toggle",
      },
    ],
    initialValues: initialHomePageData,
    onSubmit: async (changes) => {
      console.log("Saved!", changes);
    },
  };

  const [modifiedValues, form] = useForm(formConfig);
  usePlugin(form);

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
    <InlineForm form={form}>
      <TemplateBase>
        <Head>
          <title>{modifiedValues.title}</title>
        </Head>
        <Header size="large" />
        <section className="headingMd">
          <InlineWysiwyg name="rawMarkdownBody" format="markdown">
            <ReactMarkdown>{modifiedValues.rawMarkdownBody}</ReactMarkdown>
          </InlineWysiwyg>
        </section>
        <section className="headingMd padding1px">
          <h2 className="headingLg">
            <InlineTextarea name="blogPostListTitle" />
          </h2>
          <ul className="list">
            {allPostsData.map(({ id, date, title, draft }) => {
              if (draft && cms.disabled) return null;

              return (
                <li className="listItem" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className="lightText">
                    <FormattedDate dateString={date} />
                  </small>
                </li>
              );
            })}
          </ul>
        </section>
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
