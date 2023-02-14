import { render, screen } from "@testing-library/react";
import App from "./App";

test("Given the App, When the component is rendered, Then the text should be present", () => {
  render(<App />);
  const text = screen.getByText(
    /Testing API calls in React with the SWAPI API/i
  );
  expect(text).toBeInTheDocument();
});
