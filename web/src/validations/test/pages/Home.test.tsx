import { render } from "@src/validations/utils/test-utils";
import Home from "@src/app/[lang]/page";
import { i18n } from "../../../../../i18n.config";

const setup = async () => {
  const jsx = await Home({
    params: {
      lang: i18n.defaultLocale,
    },
  });
  // <Home
  //   params={{
  //     lang: i18n.defaultLocale,
  //   }}
  // />

  const context = render(jsx);

  return {
    context,
  };
};

describe("Projects Test Suite", () => {
  it("should render the component", async () => {
    const utils = await setup();

    const home = utils.context.getByTestId("home");

    expect(home).toBeInTheDocument();

    expect(home.children.length).toBe(2);
  });
});
