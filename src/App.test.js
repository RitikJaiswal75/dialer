import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders 12 buttons", () => {
  render(<App />);
  const buttons = screen.queryAllByRole("button");
  expect(buttons).toHaveLength(12);
});

test("Check for 1 textbox", () => {
  render(<App />);
  const input = screen.getAllByRole("textbox");
  expect(input).toHaveLength(1);
});

test("check display on button click", () => {
  render(<App />);
  const buttons = screen.queryAllByRole("button");
  fireEvent.click(buttons[0]);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("1");
});

test("check display on multiple button click", () => {
  render(<App />);
  const buttons = screen.queryAllByRole("button");
  fireEvent.click(buttons[11]);
  fireEvent.click(buttons[0]);
  fireEvent.click(buttons[2]);
  fireEvent.click(buttons[5]);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("136");
});

test("Clear button must clear the screen", () => {
  render(<App />);
  const buttons = screen.queryAllByRole("button");
  fireEvent.click(buttons[0]);
  const input = screen.getByRole("textbox");
  expect(input).toHaveValue("1");
  fireEvent.click(buttons[9]);
  expect(input).toHaveValue("");
});

test.skip("user should not directly enter from keyboard", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "123" } });
  expect(input).toHaveValue("");
});
