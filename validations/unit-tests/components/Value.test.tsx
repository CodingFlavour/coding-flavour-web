import Value from "@src/presentation/components/Value";
import { render } from "../../utils/test-utils";
import Image from "next/image";

const mockValue = {
  id: "1",
  title: "Test Title",
  description: "Test Description",
  image: "/path/to/image.png",
};

const mockImage = jest.fn();

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<typeof Image>) => {
    mockImage(props);
    return <img data-testid="mock-image" />;
  },
}));

const setup = () => {
  const context = render(<Value value={mockValue} />);

  return {
    context,
  };
};

describe("Value component", () => {
  it("renders correctly with provided data", () => {
    const { context } = setup();

    const valueImage = context.getByTestId("mock-image");
    const valueTitle = context.getByTestId("value-title");
    const valueDescription = context.getByTestId("value-description");

    expect(valueTitle).toBeInTheDocument();
    expect(valueTitle).toHaveTextContent(mockValue.title);
    expect(valueDescription).toBeInTheDocument();
    expect(valueDescription).toHaveTextContent(mockValue.description);
    expect(valueImage).toBeInTheDocument();
    expect(mockImage).toHaveBeenCalledWith({
      alt: `${mockValue.title} image`,
      src: mockValue.image,
      className: "valueContainer__image",
      "data-testid": "value-image",
      height: 100,
      width: 100,
    });
  });
});
