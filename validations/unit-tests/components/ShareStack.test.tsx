import { getDictionary } from "@src/data/locales/dict/dict";
import { render } from "../../utils/test-utils";
import { i18n } from "i18n.config";
import ShareStack from "@src/presentation/components/ShareStack";

const setup = async () => {
  const dict = await getDictionary(i18n.defaultLocale);
  const common = dict.common;

  const jsx = await ShareStack({
    articleId: "",
    dict: common
  });

  const context = render(jsx);

  return {
    context,
  };
};

// TODO: Check clipboard content and all func when done
describe("Share Stack Test Suite", () => {
  it("should render the component", async () => {
    const { context } = await setup();

    const shareStack = context.getByTestId("share-stack");

    expect(shareStack).toBeInTheDocument();
    expect(shareStack.children.length).toBe(6);
  });
});
