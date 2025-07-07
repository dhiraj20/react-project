import * as React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./home";

test("a home component", () => {
  render(<Home />);
  expect(screen.getByText('Home')).toBeInTheDocument();
});
