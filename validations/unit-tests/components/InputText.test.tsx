import InputText, { IInputTextProps } from "@src/presentation/components/InputText";
import { render } from "../../utils/test-utils";

interface ISetup {
  props: IInputTextProps;
}

const DEFAULT_PROPS_MOCK: IInputTextProps = {
  id: "",
  type: "text",
  value: "mock-value",
  rows: 1,
};

const setup = ({ props }: ISetup) => {
  const context = render(
    <InputText
      id={props.id}
      type={props.type}
      value={props.value}
      rows={props.rows}
    />
  );

  return {
    context,
  };
};

describe("Input Text Test Suite", () => {
  it("should render the component with the input", () => {
    const { context } = setup({
      props: DEFAULT_PROPS_MOCK,
    });

    const inputTextValue = context.getByTestId("input-text-value");
    const inputTextInput = context.getByTestId("input-text-input");
    const inputTextArea = context.queryByTestId("input-text-area");

    expect(inputTextValue).toBeInTheDocument();
    expect(inputTextValue).toHaveTextContent(DEFAULT_PROPS_MOCK.value);
    expect(inputTextInput).toBeInTheDocument();
    expect(inputTextArea).toBeNull();
  });
  it("should render the component with the textarea", () => {
    const { context } = setup({
      props: {
        ...DEFAULT_PROPS_MOCK,
        type: 'textarea'
      }
    });

    const inputTextValue = context.getByTestId("input-text-value");
    const inputTextInput = context.queryByTestId("input-text-input");
    const inputTextArea = context.getByTestId("input-text-area");

    expect(inputTextValue).toBeInTheDocument();
    expect(inputTextValue).toHaveTextContent(DEFAULT_PROPS_MOCK.value);
    expect(inputTextArea).toBeInTheDocument();
    expect(inputTextArea.getAttribute('rows')).toBe(`${DEFAULT_PROPS_MOCK.rows}`);
    expect(inputTextInput).toBeNull();
  });
});
