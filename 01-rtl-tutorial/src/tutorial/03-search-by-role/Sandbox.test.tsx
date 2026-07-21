import { render, screen, logRoles } from "@testing-library/react";
import Sandbox from "./Sandbox";

describe("03-search-by-role", () => {
  test("renders nav and nav links", () => {
    const { container } = render(<Sandbox />);
    logRoles(container);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  test("renders headings with correct hierarchy", () => {
    render(<Sandbox />);
    expect(screen.getByRole("heading", { name: "Main Heading", level: 1 }));
    expect(screen.getByRole("heading", { name: "Subheading", level: 2 }));
  });

  test("renders image with alt text", () => {
    render(<Sandbox />);
    expect(screen.getByRole("img", { name: "Example" })).toBeInTheDocument();
  });

  test("renders image with alt text", () => {
    render(<Sandbox />);
    expect(
      screen.getByRole("button", { name: "Click Me" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  test("async button appears after delay", async () => {
    render(<Sandbox />);

    const buttonName = /async button/i;
    expect(
      screen.queryByRole("button", { name: buttonName }),
    ).not.toBeInTheDocument();

    const asyncButton = await screen.findByRole("button", { name: buttonName });
    expect(asyncButton).toBeInTheDocument();
  });
});
