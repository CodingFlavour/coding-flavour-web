// const i18n = require('./i18n.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...i18n,
  sassOptions: {
    prependData: `
      @use "@/presentation/styles/base/grid-system.scss" as gridSystem;
      @use "@/presentation/styles/base/typography.scss" as typography;
      @use "@/presentation/styles/base/animations.scss" as animations;
      @use "@/presentation/styles/utilities/font-weight.scss" as fontWeight;
      @use "@/presentation/styles/utilities/colors.scss" as colors;
    `,
  },
};

module.exports = nextConfig;
