// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const GithubStarsHtml = `<a href=\"https://github.com/nitzano/dbzar/stargazers\"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/nitzano/dbzar?style=social"></a>`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DBZar",
  tagline: "🔁👻 Agnostic DB Anonymizer",
  url: "https://nitzano.github.io",
  baseUrl: "/dbzar/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nitzano", // Usually your GitHub org/user name.
  projectName: "dbzar", // Usually your repo name.
  plugins: ["docusaurus-plugin-hotjar"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hotjar: {
        applicationId: "2883557",
      },
      navbar: {
        title: "DBZar",
        logo: {
          alt: "DBZar Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/nitzano/dbzar",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.npmjs.com/package/dbzar",
            label: "NPM",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/docs/intro",
              },
              {
                label: "Usage",
                to: "/docs/Usage",
              },

              {
                label: "Providers",
                to: "/docs/providers",
              },
              {
                label: "Supported Databases",
                to: "/docs/supported_dbs",
              },
              {
                label: "Configuration",
                to: "/docs/config",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                html: GithubStarsHtml,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Github",
                href: "https://github.com/nitzano/dbzar",
              },
              {
                label: "NPM",
                href: "https://www.npmjs.com/package/dbzar",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nitzan Ohana, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
