import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";

describe("App", () => {
  it("renders without crashing", async () => {
    const { render } = await getPage({
        route: "/",
    });
    render();
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
});