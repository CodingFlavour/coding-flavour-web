// const i18n = require('./i18n.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...i18n,
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
