import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FormattedDate } from "../formatted-date";
import { Header } from "../header";
import "./template-single-post.module.scss";

const TemplateSinglePost = ({
  profileImageUrl,
  profileImageAltText,
  headerTitle,
  articleTitle,
  articleDate,
  articleText,
  backLinkUrl,
  backLinkLabel,
}) => {
  return (
    <div className="single-post container">
      <Header
        {...{ profileImageUrl, profileImageAltText, headerTitle }}
        size="small"
      />
      <article>
        <div>
          <h1 className="headingXl">{articleTitle}</h1>
          <span className="lightText">
            <FormattedDate dateString={articleDate} />
          </span>
        </div>
        <div>
          <ReactMarkdown>{articleText}</ReactMarkdown>
        </div>
      </article>
      <div className="back-link">
        <Link href={backLinkUrl}>
          <a>{backLinkLabel}</a>
        </Link>
      </div>
    </div>
  );
};

TemplateSinglePost.propTypes = {
  /**
   The url of the profile image
  */
  profileImageUrl: PropTypes.string,
  /**
   The alternative text for the profile image
  */
  profileImageAltText: PropTypes.string,
  /**
   The main title for the header
  */
  headerTitle: PropTypes.string,
  /**
   The title of the blog post
  */
  articleTitle: PropTypes.string,
  /**
   The date of the blog post (format as YYYY-MM-DD)
  */
  articleDate: PropTypes.string,
  /**
   The main body text of the article (markdown format)
  */
  articleText: PropTypes.string,
  /**
   The url of the back link
  */
  backLinkUrl: PropTypes.string,
  /**
   The label for the back link
  */
  backLinkLabel: PropTypes.string,
};

export { TemplateSinglePost };
