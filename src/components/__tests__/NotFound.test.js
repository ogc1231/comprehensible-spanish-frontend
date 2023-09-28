import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

test("renders NotFound component with correct message", () => {
  render(<NotFound />);

  // Check if the image is rendered
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();

  // Check if the correct message is rendered (i is for case insensitive)
  const message = screen.getByText(
    /The page you're looking for doesn't exist/i
  );
  expect(message).toBeInTheDocument();
});