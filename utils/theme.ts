const theme = {
  queries: {
    mobileS: '@media (max-width: 320px)',
    mobileM: '@media (max-width: 375px)',
    mobileL: '@media (max-width: 425px)',
    tablet: '@media (max-width: 768px)',
    laptop: '@media (max-width: 1024px)',
    desktop: '@media (max-width: 2560px)',
  },
} as const;

export type Theme = typeof theme;

export default theme;
