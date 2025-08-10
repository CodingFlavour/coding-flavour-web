import Visit, { IVisitProps } from "@src/presentation/components/Visit";
import { i18n } from "i18n.config";
import { render } from "../../utils/test-utils";

const DEFAULT_TARGET_MOCK = '_blank'; 
const DEFAULT_PROPS_MOCK: IVisitProps = {
  href: '/',
  text: "Visit",
}

const mockLink = jest.fn()

jest.mock("../../../src/hooks/useI18N", () => ({
  __esModule: true,
  default: () => ({
    languageActive: i18n.defaultLocale,
  }),
}));

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
    const { context } = setup();

    const visit = context.getByTestId('visit');
    const visitLink = context.getByTestId('mock-visit');
    const visitText = context.getByTestId('visit-text');
    const visitImage = context.getByTestId('visit-image');

    expect(visit).toBeInTheDocument();
    expect(visitLink).toBeInTheDocument();
    expect(mockLink).toHaveBeenCalledWith({
      className: 'visit__link',
      href: `/${i18n.defaultLocale}${DEFAULT_PROPS_MOCK.href}`,
      target: DEFAULT_TARGET_MOCK,
    });
    expect(visitText).toBeInTheDocument();
    expect(visitText).toHaveTextContent(DEFAULT_PROPS_MOCK.text);
    expect(visitImage).toBeInTheDocument();
  });
});
