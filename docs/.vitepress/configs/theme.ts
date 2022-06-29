import type { DefaultTheme } from "vitepress";
import * as nav from "./navbar";
import * as sidebar from "./sidebar";
import { github, site } from "../meta";

/**
 * Theme configs let you customize your theme.
 * @see https://vitepress.vuejs.org/config/theme-configs.html
 */
export const themeConfig: DefaultTheme.Config = {
  logo: "/images/logo.png",
  socialLinks: [{ icon: "github", link: github }],
  editLink: {
    pattern: `${github}/edit/main/docs/:path`,
    text: "编辑此页面"
  },
  // localeLinks: {
  //   text: "English",
  //   items: [{ text: "简体中文", link: `${site}/zh/` }]
  // },
  algolia: {
    appId: '5M8VQRD7W9',
    apiKey: '2fcdbd0ce638664e7a28cc64939603b9',
    indexName: 'myDocsv3',
    // searchParameters: {
    //   facetFilters: ["lang:en-US"]
    // }
  },
  nav: nav.en,
  sidebar: sidebar.en
};
