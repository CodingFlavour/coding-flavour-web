/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
        @use "../base/grid-system.scss" as gridSystem;
        @use "../base/typography.scss" as typography;
        @use "../utilities/font-weight.scss" as fontWeight;
        @use "../utilities/colors.scss" as colors;
    `,
  },
};

module.exports = nextConfig;
