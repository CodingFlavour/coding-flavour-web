import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ShareStack from "./ShareStack";

const setup = () => {
  const context = render(<ShareStack articleId="" sendEmail={() => ""} />);

  return {
    context,
  };
};

// TODO: Check clipboard content and all func when done
describe("Share Stack Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const shareStack = utils.context.getByTestId("share-stack");

    expect(shareStack).toBeInTheDocument();
    expect(shareStack.children.length).toBe(6);

  });
});
