import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";

describe("01-search-by-text", () => {
  test("demonstrates different query methods", async () => {
    render(<Sandbox />);
    screen.debug();

    // getByText
    const heading = screen.getByText('React Testing Library Examples')
    expect(heading).toBeInTheDocument();

    // Phone Number RegEx
    const phoneRegex = /\d{3}-\d{3}-\d{4}/
    const phoneText = screen.getByText(phoneRegex)
    expect(phoneText).toBeInTheDocument()

    // Query Error Messages
    const errorMessage = screen.queryByText('Error Message')
    expect(errorMessage).not.toBeInTheDocument()

    // Find Multiple
    const items = screen.getAllByText('Item 1')
    expect(items).toHaveLength(4)
    
    const asyncMessage = await screen.findByText('Async Message')
    expect(asyncMessage).toBeInTheDocument()

  });
});
