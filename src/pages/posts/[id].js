/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useForm, usePlugin, useCMS } from "tinacms";
import { InlineForm } from "react-tinacms-inline";
import { InlineWysiwyg } from "react-tinacms-editor";
import { FormattedDate } from "../../components/formatted-date";
import { Header } from "../../components/header";
import { TemplateBase } from "../../components/template-base";
import { getAllPostIds, getPostPageData } from "../../lib/posts";

export default function Post({ postData: intitalPostData }) {
  const cms = useCMS();

  const formConfig = {
    id: intitalPostData.id,
    label: "Edit Post",
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
    initialValues: intitalPostData,
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
        <Header size="small" />
        <article>
          <div>
            <h1 className="headingXl">{modifiedValues.title}</h1>
            <span className="lightText">
              <FormattedDate dateString={modifiedValues.date} />
            </span>
          </div>
          <div>
            <InlineWysiwyg name="rawMarkdownBody" format="markdown">
              <ReactMarkdown>{modifiedValues.rawMarkdownBody}</ReactMarkdown>
            </InlineWysiwyg>
          </div>
        </article>
        <div className="back-link">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      </TemplateBase>
    </InlineForm>
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
