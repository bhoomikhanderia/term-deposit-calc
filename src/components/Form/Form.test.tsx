import { screen, render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("displays the initial amount field", () => {
    render(<Form />);
    expect(screen.getByText("Starting with:")).toBeInTheDocument();
  });

  it("displays the investment term duration field", () => {
    render(<Form />);
    expect(screen.getByText("Investment Term Duration:")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
    expect(screen.getByText("3 months")).toBeInTheDocument();
  });

  it("displays the interest rate percent field", () => {
    render(<Form />);
    expect(screen.getByText("Interest Rate %:")).toBeInTheDocument();
  });

  it("displays the interest frequency selector field", () => {
    render(<Form />);
    expect(screen.getByText("Interest Paid:")).toBeInTheDocument();
  });

  it("displays the result output correct values", () => {
    render(<Form />);

    expect(screen.getByText("Total Interest Earned: $25")).toBeInTheDocument();
    expect(screen.getByText("Final Balance Earned: $10025")).toBeInTheDocument();
    expect(screen.getByText("Initial Deposit: $10000")).toBeInTheDocument();
  });
});
