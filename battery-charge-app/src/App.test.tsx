import { render, screen } from "@testing-library/react";
import App from "./App";

test("App display correct initial cards", () => {
  render(<App />);

  const cards = screen.getAllByText(/Date/i);
  expect(cards.length).toEqual(23);
});
