/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @use "@src/presentation/styles/base/grid-system.scss" as gridSystem;
      @use "@src/presentation/styles/base/spacing.scss" as spacing;
      @use "@src/presentation/styles/base/typography.scss" as typography;
      @use "@src/presentation/styles/base/animations.scss" as animations;
      @use "@src/presentation/styles/utilities/font-weight.scss" as fontWeight;
      @use "@src/presentation/styles/utilities/colors.scss" as colors;
    `,
  },
};

module.exports = nextConfig;
