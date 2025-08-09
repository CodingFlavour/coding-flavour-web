import { render } from "@/validations/utils/test-utils";
import React from "react";
import Value from "@/presentation/components/Value";

const mockValue = {
	id: "1",
	title: "Test Title",
	description: "Test Description",
	image: {
		src: "/path/to/image.png",
		height: 100,
		width: 100,
	},
};

const setup = () => {
	const context = render(<Value value={mockValue} />);

	return {
		context,
	}
}
describe("Value component", () => {
	it("renders correctly with provided data", () => {
		const utils = setup();
		const { getByText, getByAltText } = utils.context;

		// Check if the title, description, and image are rendered
		expect(getByText("Test Title")).toBeInTheDocument();
		expect(getByText("Test Description")).toBeInTheDocument();
		expect(getByAltText("Test Title image")).toBeInTheDocument();
	});
});
