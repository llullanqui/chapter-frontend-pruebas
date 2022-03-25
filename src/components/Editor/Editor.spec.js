import { render, screen } from "@testing-library/react";
import Editor from "./Editor";

describe('Character', () => {
    it("should render", () => {
      render(<Editor />)
      expect(screen.getByTestId("EditorId")).toBeInTheDocument();
    })
  })