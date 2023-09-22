import { render } from "../utils/test-utils";
import ShareStack from "../../presentation/components/ShareStack/ShareStack";

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
