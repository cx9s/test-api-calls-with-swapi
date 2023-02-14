import { render, screen } from "@testing-library/react";
import CharacterBox from "./component/character_box";
import { Character } from "./component/character";

const props: Character = {
  name: "aaa",
  height: "170",
  gender: "male",
  homeworld: "aaa",
  url: "aaa",
};

test("Given the required props, When the component is rendered, Then the text should be present", () => {
  render(<CharacterBox character={props} />);
  const text = screen.getByText(/Height:/i);
  expect(text).toBeInTheDocument();
});
