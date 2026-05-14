import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MyWiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "mywiki-ui-site.vercel.app",
    ignorePatterns: ["private", "templates", ".obsidian", "_my_template", "raw"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "EB Garamond",
        body: "Lora",
        code: "Roboto Mono",
      },
      colors: {
        lightMode: {
          light: "#f4ecd8",
          lightgray: "#e8dec3",
          gray: "#a89878",
          darkgray: "#3a3f2c",
          dark: "#1a1f15",
          secondary: "#5a7a1e",
          tertiary: "#3f5a14",
          highlight: "rgba(90, 122, 30, 0.12)",
          textHighlight: "#c9a23a55",
        },
        darkMode: {
          light: "#1a1a1f",
          lightgray: "#23232e",
          gray: "#646464",
          darkgray: "#e4ddcf",
          dark: "#e4ddcf",
          secondary: "#f1c45e",
          tertiary: "#ffd16b",
          highlight: "rgba(241, 196, 94, 0.15)",
          textHighlight: "#f1c45e88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // Plugin.ExplicitPublish(),  // Disabled - publish all notes by default
      // To enable: uncomment above and add "publish: true" frontmatter to notes you want published
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled: fails on Vercel (fetch failed) and slows builds
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
