import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("что-то правдивое и ложное", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("name is Miroslav", async () => {
    const user = userEvent.setup();

    render(<App />);

    const button = screen.getByRole("button", { name: "Click" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch("Miroslav");
  });
});
