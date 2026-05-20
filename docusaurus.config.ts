import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "SoyaOS Docs",
  tagline: "Agent Operating System — one binary, six editions, three node roles.",
  favicon: "img/logo.svg",

  url: "https://docs.soyaos.ai",
  baseUrl: "/",

  organizationName: "soyaos",
  projectName: "docs",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/soyaos/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.svg",
    navbar: {
      title: "SoyaOS",
      logo: { alt: "SoyaOS", src: "img/logo.svg" },
      items: [
        { type: "doc", docId: "quickstart", position: "left", label: "Quickstart" },
        { type: "doc", docId: "architecture", position: "left", label: "Architecture" },
        { type: "doc", docId: "editions", position: "left", label: "Editions" },
        {
          href: "https://github.com/soyaos/soyaos",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `© ${new Date().getFullYear()} SoyaOS Contributors · MIT`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
