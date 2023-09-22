import { render } from "../utils/test-utils";
import Visit, { IVisitProps } from "../../presentation/components/Visit/Visit";

const DEFAULT_PROPS_MOCK: IVisitProps = {
    href: '/',
    text: "Visit",
}

const DEFAULT_TARGET_MOCK = '_blank';

const setup = () => {
  const context = render(<Visit href={DEFAULT_PROPS_MOCK.href} text={DEFAULT_PROPS_MOCK.text} />);

  return {
    context,
  };
};

describe("Visit Test Suite", () => {
  it("should render the component", () => {
    const utils = setup();

    const visit = utils.context.getByTestId('visit');
    const visitText = utils.context.getByTestId('visit-text');
    const visitImage = utils.context.getByTestId('visit-image');

    expect(visit).toBeInTheDocument();
    expect(visit.getAttribute('href')).toBe(DEFAULT_PROPS_MOCK.href);
    expect(visit.getAttribute('target')).toBe(DEFAULT_TARGET_MOCK);
    expect(visitText).toBeInTheDocument();
    expect(visitText).toHaveTextContent(DEFAULT_PROPS_MOCK.text);
    expect(visitImage).toBeInTheDocument();
  });
});
