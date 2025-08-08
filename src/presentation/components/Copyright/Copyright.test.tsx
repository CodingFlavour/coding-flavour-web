import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Copyright from "./Copyright";

const setup = () => {
	const context = render(<Copyright />);

	return {
		context,
	};
};

describe("Copyright Test Suite", () => {
	it("should render the component", () => {
		const utils = setup();

		const Copyright = utils.context.getByTestId("copyright");
		const CopyrightIcon = utils.context.getByTestId("logo-icon");
		const CopyrightCompany = utils.context.getByTestId("copyright-text");

		expect(Copyright).toBeInTheDocument();
		expect(CopyrightIcon).toBeInTheDocument();
		expect(CopyrightCompany).toBeInTheDocument();
	});
});
