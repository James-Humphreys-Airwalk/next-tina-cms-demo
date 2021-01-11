import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { FormattedDate } from "../formatted-date";
import { Header } from "../header";

const TemplateHome = ({
  profileImageUrl,
  profileImageAltText,
  headerTitle,
  introductionText,
  allPostsData = [],
}) => {
  return (
    <div className="home container">
      <Header
        {...{ profileImageUrl, profileImageAltText, headerTitle }}
        size="large"
      />
      <section className="headingMd">
        <ReactMarkdown>{introductionText}</ReactMarkdown>
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
  );
};

TemplateHome.propTypes = {
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
   The main blog introduction text (markdown format)
  */
  introductionText: PropTypes.string,
  /**
   An array of post data objects. Note: format date as YYYY-MM-DD
  */
  allPostsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export { TemplateHome };
