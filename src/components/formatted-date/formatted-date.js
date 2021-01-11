import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";

const FormattedDate = ({ dateString }) => {
  let date;

  try {
    date = parseISO(dateString);
    return (
      <time aria-label="date" dateTime={dateString}>
        {format(date, "LLLL d, yyyy")}
      </time>
    );
  } catch (e) {
    console.error(e);
    return null;
  }
};

FormattedDate.propTypes = {
  /**
   The date of the blog post (format as YYYY-MM-DD)
  */
  dateString: PropTypes.string,
};

export { FormattedDate };
