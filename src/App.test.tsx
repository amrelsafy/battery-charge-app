import { render, screen } from "@testing-library/react";
import App from "./App";

test("App display correct number of initial cards", () => {
  render(<App />);

  const cards = screen.getAllByRole("card");
  expect(cards.length).toEqual(23);
});
