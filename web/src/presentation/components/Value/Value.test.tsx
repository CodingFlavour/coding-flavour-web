import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Value from "./Value";

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

describe("Value component", () => {
	it("renders correctly with provided data", () => {
		const { getByText, getByAltText } = render(<Value value={mockValue} />);

		// Check if the title, description, and image are rendered
		expect(getByText("Test Title")).toBeInTheDocument();
		expect(getByText("Test Description")).toBeInTheDocument();
		expect(getByAltText("Test Title image")).toBeInTheDocument();
	});
});
