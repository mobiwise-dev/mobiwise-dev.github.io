// @ts-check

///////////////////////////////////////////////////////////////////////////////
// CODE THEMES
///////////////////////////////////////////////////////////////////////////////
const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

///////////////////////////////////////////////////////////////////////////////
// CONFIG
///////////////////////////////////////////////////////////////////////////////
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MobiWise",
  tagline: "Mobirise more Wise",
  favicon: "img/mobiwise.svg",

  // url production
  url: "https://mobiwise.dev",
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "mobiwise-dev", // user name.
  projectName: "mobiwise-dev.github.io", // Repo name.
  deploymentBranch: "gh-pages", // The branch of your docs repo that you are publishing to GitHub pages

  // onBrokenLinks: "throw", // Type : 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenLinks: "ignore", // Type : 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: "warn", // Type : 'ignore' | 'log' | 'warn' | 'throw'

  ///////////////////////////////////////////////////////////////////////////////
  // INTERNATIONALIZATION
  ///////////////////////////////////////////////////////////////////////////////
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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

          showLastUpdateTime: true,
          breadcrumbs: true,

          // editUrl: "https://github.com/mobiwise-dev/mobiwise-dev.github.io/",
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
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
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

      styles: [
        // String format.
        "https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css",
        // Object format.
        // {
        //   href: "http://mydomain.com/style.css",
        // },
      ],

      //////////////////////////////////////////////////////////////////////////

      scripts: [
        {
          src: "/mw.js",
          async: true,
        },
      ],
      // scripts: [
      //   // String format.
      //   // "https://docusaurus.io/script.js",
      //   // Object format.
      //   {
      //     src: "/mw.js",
      //     async: true,
      //   },
      // ],

      //////////////////////////////////////////////////////////////////////////

      headTags: [],

      //////////////////////////////////////////////////////////////////////////

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

      // metaData: {
      //   generator: false,
      // },

      //////////////////////////////////////////////////////////////////////////

      announcementBar: {
        id: "support_us",
        content: "<b>Under construction | Under construction | Under construction | Under construction | Under construction | Under construction</b>",
        backgroundColor: "#e43f3f",
        textColor: "black",
        isCloseable: true,
      },

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

          { to: "/components", label: "Components", position: "left" },

          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            label: "Cheat Sheet",
            position: "left",
          },

          // {
          //   type: "localeDropdown",
          //   position: "right",
          //   dropdownItemsAfter: [
          //     {
          //       to: "#",
          //       label: "Soon",
          //     },
          //     // {
          //     //   to: "https://my-site.com/help-us-translate",
          //     //   label: "Help us translate",
          //     // },
          //   ],
          // },

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
          //     '<a href="https://www.paypal.com/donate/?hosted_button_id=ZXVQYM7ZEH6QN" target="_blank" style="content: \'\'; width: 128px; height: 50px; background-image: url(\'https://viatesting.files.wordpress.com/2020/03/paypal-donate-button.png\'); background-repeat: no-repeat;  background-size: 128px 50px; display: flex">',
          // },

          // {
          //   href: "https://github.com/mobiwise-dev/",
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
            title: "Links",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Extensions",
                to: "/extensions",
              },
              {
                label: "Components",
                to: "/components",
              },
              {
                label: "Cheat Sheet",
                to: "/docs/Cheat_Sheet",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //   ],
          // },
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

      //////////////////////////////////////////////////////////////////////////

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
