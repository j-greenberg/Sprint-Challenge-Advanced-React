import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-testing-libary/cleanup-after-each";
import { render, fireEvent } from "@testing-library/react";
import Login from "./components/Login";
import List from "./components/List";
import Card from "./components/Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("button exists", () => {
  getByLabelText("/change localstorage/i");

  //   const notesInput = getByLabelInput(/notes/i);
});

test("Login component renders correctly", () => {
  render(<Login />);
});

test("List component renders correctly", () => {
  render(<List />);
});

test("Card component renders correctly", () => {
  render(<Card />);
});

test("Loads List asynchronously", async () => {
  await render(<List />);
});

test("Loads Card asynchronously", async () => {
  await render(<Card />);
});

// test("animal form add new animals to animal list", () => {
//   const {} = render(<AnimalForm />);

//   const speciesInput = getByLabelText(/species/i);
//   const ageInput = getByLabelText(/age/i);
//   const notesInput = getByLabelInput(/notes/i);

//   // fireEvent function from RTL to fill in the input
//   fireEvent.change(speciesInput, {
//     target: { name: "species", value: "Elephant" }
//   });

//   fireEvent.change(speciesInput, {
//     target: { name: "age", value: "28" }
//   });

//   fireEvent.change(speciesInput, {
//     target: { name: "notes", value: "Really old, but very sweet" }
//   });

//   const submitButton = getByText(/submit/i);

//   fireEvent.click(submitButton);

//   getByText(/elephant/i);
// });
