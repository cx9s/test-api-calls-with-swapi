import { render, screen } from "@testing-library/react";
import Character from "./component/character";
import { Char } from "./component/char";

const character: Char = {
  name: "a",
  height: "170",
  gender: "n/a",
  homeworld: "a",
  url: "a",
};

test("Given the required props, When the component is rendered, Then the text should be present", async () => {
  render(<Character character={character} />);
  const text = await screen.findByText(/Height/i);
  expect(text).toBeInTheDocument();
});
