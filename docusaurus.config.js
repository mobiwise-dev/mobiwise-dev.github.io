// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

///////////////////////////////////////////////////////////////////////////////
// CODE THEMES
///////////////////////////////////////////////////////////////////////////////

// const lightCodeTheme = require("prism-react-renderer/themes/github");
const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MobiWise",
  tagline: "Mobirise more Wise",
  favicon: "img/mobiwise.svg",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mobiwise-dev", // Usually your GitHub org/user name.
  projectName: "mobiwise-dev.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch of your docs repo that you are publishing to GitHub pages

  onBrokenLinks: "throw", // Type : 'ignore' | 'log' | 'warn' | 'throw'
  // onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn", // Type : 'ignore' | 'log' | 'warn' | 'throw'

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
    },
  },

  ///////////////////////////////////////////////////////////////////////////////
  // PRESETS
  ///////////////////////////////////////////////////////////////////////////////
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          // test options
          showLastUpdateTime: true,
          breadcrumbs: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        blog: {
          showReadingTime: true,

          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} MobiWise`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  ///////////////////////////////////////////////////////////////////////////////
  // SSR TEMPLATE
  ///////////////////////////////////////////////////////////////////////////////
  ssrTemplate: `<!DOCTYPE html>
  <html <%~ it.htmlAttributes %>>
    <head>
      <meta charset="UTF-8">
      <% it.metaAttributes.forEach((metaAttribute) => { %>
        <%~ metaAttribute %>
      <% }); %>
      <%~ it.headTags %>
      <% it.stylesheets.forEach((stylesheet) => { %>
        <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
      <% }); %>
      <% it.scripts.forEach((script) => { %>
        <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
      <% }); %>
    </head>
    <body <%~ it.bodyAttributes %>>
      <div class="noise_container"><div class="noise"></div></div>
      <%~ it.preBodyTags %>
      <div id="__docusaurus">
        <%~ it.appHtml %>
      </div>
      <% it.scripts.forEach((script) => { %>
        <script src="<%= it.baseUrl %><%= script %>"></script>
      <% }); %>
      <%~ it.postBodyTags %>
      <script async>const txt = "mobiwise ";const txt_with_spaces = txt.split('').join(' ');const txt_rep = txt_with_spaces.repeat(1000);document.body.setAttribute('data-bg', txt_rep);</script>
    </body>
  </html>`,

  ///////////////////////////////////////////////////////////////////////////////
  // PLUGINS
  ///////////////////////////////////////////////////////////////////////////////
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "components",
        sidebarPath: require.resolve("./sidebars.js"),
        id: "components",
        path: "components",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "extensions",
        sidebarPath: require.resolve("./sidebars.js"),
        id: "extensions",
        path: "extensions",
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "tutorials",
        sidebarPath: require.resolve("./sidebars.js"),
        id: "tutorials",
        path: "tutorials",
        showLastUpdateTime: true,
      },
    ],
  ],

  ///////////////////////////////////////////////////////////////////////////////
  // THEME CONFIG
  ///////////////////////////////////////////////////////////////////////////////
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",

      //////////////////////////////////////////////////////////////////////////

      headTags: [],
      postBodyTags: [
        {
          tagName: "div",
          innerHTML: '<div class="noise"></div>',
          attributes: {
            class: "noise_container",
          },
        },
      ],

      //////////////////////////////////////////////////////////////////////////

      docs: {
        sidebar: {
          autoCollapseCategories: true,
          // hideable: true,
        },
      },

      //////////////////////////////////////////////////////////////////////////

      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      //////////////////////////////////////////////////////////////////////////

      announcementBar: {
        id: "support_us",
        content: '<a target="_blank" rel="noopener noreferrer" href="https://www.paypal.com/donate/?hosted_button_id=ZXVQYM7ZEH6QN">Don\'t forget to support our work by making a donation</a>',
        backgroundColor: "#e43f3f",
        textColor: "#f1f1f1",
        isCloseable: true,
      },

      //////////////////////////////////////////////////////////////////////////

      scripts: [
        // script syntax
        "test.js",
        // object syntax
        // {
        //   src: "http://localhost:3000/test.js",
        //   async: true,
        // },
      ],

      //////////////////////////////////////////////////////////////////////////

      // metaData: {
      //   generator: false,
      // },

      //////////////////////////////////////////////////////////////////////////

      navbar: {
        // title: "MobiWise.dev",
        logo: {
          alt: "MobiWise Logo",
          src: "img/mobiwise.svg",
        },

        items: [
          { to: "/blog", label: "Blog", position: "left" },

          { to: "/tutorials", label: "Tutorials", position: "left" },

          { to: "/extensions", label: "Extensions", position: "left" },

          // {
          //   type: "dropdown",
          //   // to: "/extensions",
          //   label: "Extensions",
          //   position: "left",
          //   items: [
          //     {
          //       label: "MobiWise Store",
          //       href: "extensions/mobiwise-store",
          //     },
          //     {
          //       label: "MobiWise Forum Feed",
          //       href: "extensions/mobiwise-forum_feed",
          //     },
          //     {
          //       label: "MobiWise Bootstrap Icons",
          //       href: "mobiwise-bootstrap_icons",
          //     },
          //   ],
          // },

          { to: "/components", label: "Components", position: "left" },

          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            label: "Cheat Sheet",
            position: "left",
          },

          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsAfter: [
              {
                to: "https://my-site.com/help-us-translate",
                label: "Help us translate",
              },
            ],
          },

          // {
          //   type: "html",
          //   position: "right",
          //   value: "<button>Donate</button>",
          // },

          {
            href: "https://www.paypal.com/donate/?hosted_button_id=ZXVQYM7ZEH6QN",
            label: "Donate",
            position: "right",
          },

          // {
          //   type: "html",
          //   position: "right",
          //   value:
          //     '<a href="https://dev.azure.com/{your-organization}/{your-project}/_git/{your-docusaurus-repo}" target="_blank" style="content: \'\'; width: 128px; height: 50px; background-image: url(\'https://viatesting.files.wordpress.com/2020/03/paypal-donate-button.png\'); background-repeat: no-repeat;  background-size: 128px 50px; display: flex">',
          // },

          // {
          //   href: "https://github.com/mobiwise/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },

          {
            type: "search",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },

      //////////////////////////////////////////////////////////////////////////

      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "External links",
            items: [
              {
                label: "Mobirise",
                to: "https://mobirise.com/",
              },
              {
                label: "Mobirise Forums",
                to: "https://forums.mobirise.com/",
              },
              // {
              //   label: "GitHub",
              //   href: "https://github.com/mobiwise-dev",
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://mobirise.dev">MobiWise.dev</a>`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
