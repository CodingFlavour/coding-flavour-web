/** @type { import('@storybook/react').Preview } */

import "../../web/src/presentation/styles/base/_reset.scss";
const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
