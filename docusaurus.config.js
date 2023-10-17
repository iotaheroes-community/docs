// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IOTA Heroes Documentation',
  tagline: 'Explore the world of IOTA Heroes',
  favicon: 'img/favicon.ico',

  url: 'https://your-documentation-site.com',
  baseUrl: '/',

  organizationName: 'iota-heroes',  // Adjust this to your GitHub organization name
  projectName: 'documentation',  // Adjust this to your repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/iota-heroes/documentation/tree/main/',  // Adjust this to your repository URL
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/iota-heroes-social-card.png',  // Replace with your project's social card
    navbar: {
      logo: {
        alt: 'IOTA Heroes Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',  // Adjust the sidebarId to match your sidebar file
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://game.iotaheroes.com',
          label: 'Game',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X.com',
              to: 'https://twitter.com/IotaHeroes',
            },
            {
              label: 'Discord',
              to: 'https://discord.gg/92JHZzFvdA',
            },
          ],
        },
        {
          title: 'More',
          items: [
           
            {
              label: 'GitHub',
              href: 'https://github.com/iota-heroes/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IOTA Heroes. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
