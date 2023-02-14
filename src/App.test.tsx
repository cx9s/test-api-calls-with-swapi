import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders h1 element", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Testing API calls in React with the SWAPI API/i
  );
  expect(linkElement).toBeInTheDocument();
});
