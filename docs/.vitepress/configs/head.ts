import type { HeadConfig } from "vitepress";
import { name, site, descriptionEN, keywords, ogTitle, ogImg } from "../meta";

export const head: HeadConfig[] = [
  ["meta", { name: "keywords", content: keywords }],
  ["meta", { name: "author", content: "AGou-ops" }],
  ["meta", { name: "twitter:title", content: ogTitle }],
  ["meta", { name: "twitter:description", content: descriptionEN }],
  ["meta", { name: "twitter:creator", content: "@AGou-ops" }],
  ["meta", { name: "twitter:site", content: "@AGou-ops" }],
  ["meta", { name: "twitter:card", content: "summary_large_image" }],
  ["meta", { name: "twitter:image", content: ogImg }],
  ["meta", { name: "twitter:image:alt", content: "logo" }],
  ["meta", { name: "og:description", content: descriptionEN }],
  ["meta", { name: "og:url", content: site }],
  ["meta", { name: "og:type", content: "article" }],
  ["meta", { name: "og:locale", content: "en_US" }],
  ["meta", { name: "og:image", content: ogImg }],
  ["meta", { name: "og:image:alt", content: "logo" }],
  ["meta", { name: "application-name", content: name }],
  ["meta", { name: "apple-mobile-web-app-title", content: name }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#dd6954" }],
  ["meta", { name: "msapplication-TileImage", content: "/images/icons/favicon-192.png" }],
  ["meta", { name: "theme-color", content: "#dd6954" }],

  ["link", { rel: "canonical", href: site }],
  ["link", { rel: "alternate", href: site, hreflang: "x-default" }],
  ["link", { rel: "alternate", href: site, hreflang: "en-us" }],
  ["link", { rel: "alternate", href: site + "/zh/", hreflang: "zh-hans" }],

  ["link", { rel: "shortcut icon", href: "/images/favicon.ico" }],
];
