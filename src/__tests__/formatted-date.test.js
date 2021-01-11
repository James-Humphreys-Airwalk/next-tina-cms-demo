import React from "react";
import { render, screen } from "@testing-library/react";
import { FormattedDate } from "../components/formatted-date/formatted-date";

describe("FormattedDate - with valid date string", () => {
  it("should render the correct date from a given date string", () => {
    render(<FormattedDate dateString="2021-02-01" />);

    expect(screen.getByLabelText("date")).toHaveTextContent(
      /^February 1, 2021/
    );
  });
});

describe("FormattedDate - with invalid date string", () => {
  it("should not render a date to the DOM", () => {
    render(<FormattedDate dateString="2021-02-aa" />);

    expect(screen.queryByLabelText("date")).toBeFalsy();
  });
});
