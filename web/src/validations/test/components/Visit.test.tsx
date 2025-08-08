import { render } from "@src/validations/utils/test-utils";
import Visit, { IVisitProps } from "../../../presentation/components/Visit";

const DEFAULT_PROPS_MOCK: IVisitProps = {
  href: '/',
  text: "Visit",
}

const DEFAULT_TARGET_MOCK = '_blank';

const mockLink = jest.fn()

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ className, href, target, children }: any) => {
    mockLink({
      className,
      href,
      target,
    });
    return <a data-testid="mock-visit">{children}</a>;
  },
}));

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
    const visitLink = utils.context.getByTestId('mock-visit');
    const visitText = utils.context.getByTestId('visit-text');
    const visitImage = utils.context.getByTestId('visit-image');

    expect(visit).toBeInTheDocument();
    expect(visitLink).toBeInTheDocument();
    expect(mockLink).toHaveBeenCalledWith({
      className: 'visit__link',
      href: DEFAULT_PROPS_MOCK.href,
      target: DEFAULT_TARGET_MOCK,
    });
    expect(visitText).toBeInTheDocument();
    expect(visitText).toHaveTextContent(DEFAULT_PROPS_MOCK.text);
    expect(visitImage).toBeInTheDocument();
  });
});
