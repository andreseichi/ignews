import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    render(
      <Home
        product={{
          priceId: "fake-price-id",
          amount: "$9.90",
        }}
      />
    );

    expect(screen.getByText("$9.90")).toBeInTheDocument();
  });
});
