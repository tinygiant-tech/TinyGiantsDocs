import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'TinyGiants',
  tagline: 'Home',
  favicon: 'img/home-page/logo-icon-only.png',

  url: 'https://docs.tinygiants.tech',
  baseUrl: '/',
  organizationName: 'TinyGiants',
  projectName: 'GameEventSystem',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/LemonSqi/GameEventSystemDocs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-image-zoom'],
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'TinyGiants',
      logo: {
        alt: 'TinyGiants Logo',
        src: 'img/home-page/logo-icon-only.png',
      },
      items: [
        {
          type: 'html',
          position: 'left',
          value: `
            <a href="/docs/game-event-system/intro/overview" class="navbar__link" style="display: flex; align-items: center; gap: 8px; text-decoration: none; padding: 0 12px; height: 100%;">
              <img src="/img/home-page/logo-pure.png" style="width: 20px; height: 20px; object-fit: contain; display: block;" />
              <span style="font-weight: 600; line-height: 1;">Game Event System</span>
            </a>
          `,
        },
        {
          href: 'https://tinygiants.tech',
          position: 'right',
          className: 'header-discord-link',
        },
        {
          href: 'https://assetstore.unity.com/',
          position: 'right',
          className: 'header-assetstore-link',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp'],
    },
    zoom: {
      selector: '.markdown img:not(.img-full)',
      background: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(20, 20, 20, 0.9)'
      },
      config: {
        margin: 40,
        scrollOffset: 0,
      }
    },
    mermaid: {
      options: {
        theme: {light: 'forest', dark: 'dark'},
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} <strong>TinyGiants</strong>.`,
    },
  }),
};

export default config;