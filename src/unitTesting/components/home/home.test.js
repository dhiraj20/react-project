import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./home";

test("a home component", async () => {
  render(<Home />);
  expect(screen.getByText("Home")).toBeInTheDocument();

  // Verify initial name is displayed
  expect(screen.getByText(/Name: Dhiraj/)).toBeInTheDocument();
  expect(screen.getByText(/Updated Name:/)).toBeInTheDocument();

  // find the user input and simulate typing
  const input = screen.getByPlaceholderText("name");
  await userEvent.clear(input);
  await userEvent.type(input, "Majhi");

  // test button click
  const button = screen.getByTestId("update-btn");
  await userEvent.click(button);

  // Check that the updated name is displayed
  expect(screen.getByText(/Updated Name: Majhi/)).toBeInTheDocument();
});


test("fetches and displays user list", async () => {
  // https://www.browserstack.com/guide/jest-mock-fetch-requests

  // const response = await fetch('/api/users'); // Promise 1
  // const data = await response.json();         // Promise 2


  global.fetch = jest.fn(() => Promise.resolve({  // To mock above two step so two promise is used here
    json: () => Promise.resolve([
      { id: 1, name: "Leanne Graham" },
      { id: 2, name: "Ervin Howell" },
      { id: 3, name: "Clementine Bauch" }
    ]),
    ok: true
  }))
})