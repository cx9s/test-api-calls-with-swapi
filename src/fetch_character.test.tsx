import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FetchCharacter from "./component/fetch_character";

const server = setupServer(
  rest.get("/people/1", (req, res, ctx) => {
    return res(
      ctx.json({
        name: "abc",
        height: "170",
        gender: "n/a",
        homeworld: "aaa",
        url: "aaa",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Given the required props, When the api is called successfully, Then the text should be present and button should be disabled", async () => {
  render(<FetchCharacter apiUrl="/people/1" />);

  fireEvent.click(screen.getByText("Fetch character"));
  await waitFor(() => screen.findByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("abc");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("Given the required props, When the reponse status is 404, Then the error should be present", async () => {
  server.use(
    rest.get("/people/1", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  render(<FetchCharacter apiUrl="/people/1" />);

  fireEvent.click(screen.getByText("Fetch character"));
  await waitFor(() => screen.findByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent(
    "Oops... I cannot find anything"
  );
});

test("Given the required props, When the reponse status is 418, Then the error should be present", async () => {
  server.use(
    rest.get("/people/1", (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );

  render(<FetchCharacter apiUrl="/people/1" />);

  fireEvent.click(screen.getByText("Fetch character"));
  await waitFor(() => screen.findByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent("418 I'm a tea pot");
});

test("Given the required props, When the reponse status is 500, Then the error should be present", async () => {
  server.use(
    rest.get("/people/1", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<FetchCharacter apiUrl="/people/1" />);

  fireEvent.click(screen.getByText("Fetch character"));
  await waitFor(() => screen.findByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent(
    "Oops... something went wrong"
  );
});
