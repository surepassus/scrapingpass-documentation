// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scrapingpass API',
  tagline: 'Web Scraping API and Robotic process automation (RPA)',
  url: 'https://scrapingpass.com',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/scrapingpass-icon.png',
  organizationName: 'surepassus', // Usually your GitHub org/user name.
  projectName: 'scrapingpass-documentation', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Scrapingpass API',
        logo: {
          alt: 'Scrapingpass Logo',
          src: 'img/scrapingpass-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'api-overview',
            position: 'left',
            label: 'Documentation',
          },
          { 
            href: 'https://scrapingpass.com/blog/', 
            label: 'Blog', 
            position: 'left' 
          },
          {
            href: 'https://scrapingpass.com/pricing/',
            label: 'Try for Free',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://surepass.io/" target="_blank">Surepass Technologies</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
