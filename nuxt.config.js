import { resolve } from "path";

export default {
  srcDir: "src",
  target: "static",
  head: {
    title: "Tarık Coşkun",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#30343b" },
      {
        name: "description",
        content:
          "Personal website of Tarık Coşkun, 15 years old Turkish front-end developer",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icon.webp" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
        media: "all",
      },
    ],
  },
  pwa: {
    manifest: {
      name: "Tarık Coşkun",
      theme_color: "#30343b",
    },
  },
  css: ["@/assets/css/main.scss"],
  components: true,
  tailwindcss: {
    configPath: resolve("./tailwind.config.js"),
    viewer: false,
    jit: true,
  },
  plugins: [
    { src: "~/plugins/vue-unicons", mode: "client" },
    { src: "~/plugins/vue-typer", ssr: false },
    { src: "~/plugins/animxyz", mode: "client" },
  ],
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/postcss8",
  ],
  modules: ["v-wave/nuxt", "@nuxtjs/svg"],
  vWave: {
    duration: 0.2,
    finalOpacity: 0.1,
  },
  colorMode: {
    classSuffix: "",
  },
  build: {
    postcss: {
      plugins: {
        "postcss-nested": {},
      },
    },
  },
};
