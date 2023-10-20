import { render } from "../utils/test-utils";
import InputText, { IInputTextProps } from "../../presentation/components/InputText";

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
    const utils = setup({
      props: DEFAULT_PROPS_MOCK,
    });

    const inputTextValue = utils.context.getByTestId("input-text-value");
    const inputTextInput = utils.context.getByTestId("input-text-input");
    const inputTextArea = utils.context.queryByTestId("input-text-area");

    expect(inputTextValue).toBeInTheDocument();
    expect(inputTextValue).toHaveTextContent(DEFAULT_PROPS_MOCK.value);
    expect(inputTextInput).toBeInTheDocument();
    expect(inputTextArea).toBeNull();
  });
  it("should render the component with the textarea", () => {
    const utils = setup({
      props: {
        ...DEFAULT_PROPS_MOCK,
        type: 'textarea'
      }
    });

    const inputTextValue = utils.context.getByTestId("input-text-value");
    const inputTextInput = utils.context.queryByTestId("input-text-input");
    const inputTextArea = utils.context.getByTestId("input-text-area");

    expect(inputTextValue).toBeInTheDocument();
    expect(inputTextValue).toHaveTextContent(DEFAULT_PROPS_MOCK.value);
    expect(inputTextArea).toBeInTheDocument();
    expect(inputTextArea.getAttribute('rows')).toBe(`${DEFAULT_PROPS_MOCK.rows}`);
    expect(inputTextInput).toBeNull();
  });
});
