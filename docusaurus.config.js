module.exports = {
  title: "NavVis IVION Documentation",
  tagline: "NavVis Webhelp",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "NavVis",
  projectName: "navvis-docusaurus-template",
  themeConfig: {
    navbar: {
      title: "NavVis VLX Documentation",
      logo: {
        alt: "NavVis VLX Documentation",
        src: "img/navvis-logo-vlx.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          position: "left",
        }
       ]
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} NavVis GmbH.`,
    },
    colorMode: {
      respectPrefersColorScheme: true
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: false,
        pages: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false
      }
    ]
  ]
};
