import type { SoftwareApplication, WithContext } from 'schema-dts';

export const homeAlphaSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Alpha Theme for Hugo',
  applicationCategory: 'WebApplication',
  applicationSuite: 'Hugo',
  operatingSystem: 'Cross-platform',
  downloadUrl: 'https://github.com/oxypteros/alpha/releases', 
  featureList: [
    "Minimalistic",
    "Performance-focused with perfect Lighthouse scores",
    "Full SEO schema json-ld support out of the box",
    "Linting Validator (LiVa) tool for error checking",
    "Seamless dark mode",
    "Fully responsive and accessible (A11y)",
    "Multilingual"
  ],
  offers: {
    '@type': 'Offer',
    price: '0', 
  },
  author: {
    '@type': 'Person',
    name: 'Stratis Oxypteros',
    url: 'https://oxypteros.com',
  },
  // screenshot: 'https://oxypteros.com/videos/hugo-theme-poster.jpg',
};