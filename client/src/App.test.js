import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import Login from "./components/Login";
import List from "./components/List";
import Card from "./components/Card";
import "@testing-library/jest-dom/extend-expect";

it("App Component Renders Without Crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App Component Renders & Has Title Text", async () => {
  // Arrange
  const { getByText } = render(<App />);
  // Act
  const greeting = getByText(/sprint challenge/i);
  // Assert
  expect(greeting).toBeInTheDocument();
});

test("Login Component Renders", () => {
  render(<Login />);
});

test("Login Component Renders, Button Exists, & Click Event Fires", () => {
  // Arrange
  const { getByText } = render(<Login />);

  // Act
  const button = getByText(/change localstorage/i);

  // Assert
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});

test("Card Component Renders", () => {
  render(<Card />);
});

test("Card Component Renders Asynchronously", async () => {
  await render(<Card />);
});

test("Card Component Renders, Displays Data From API Call", () => {
  // Arrange
  const { getByText } = render(<Card />);
  // Act
  const title = getByText(/name/i);
  const country = getByText(/country/i);
  const searches = getByText(/searches/i);
  // Assert
  expect(title).toBeInTheDocument();
  expect(country).toBeInTheDocument();
  expect(searches).toBeInTheDocument();
});
