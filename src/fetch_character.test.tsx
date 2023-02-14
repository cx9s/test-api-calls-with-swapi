import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import FetchCharacter from "./component/fetch_character";

test("Given the required props, When the api is called, Then the text should be present and button should be disabled", async () => {
  render(<FetchCharacter apiUrl="https://swapi.dev/api/people/1" />);

  // ACT
  await user.click(screen.getByText(/Fetch character/i));
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Luke Skywalker");
  expect(screen.getByRole("button")).toBeDisabled();
});
