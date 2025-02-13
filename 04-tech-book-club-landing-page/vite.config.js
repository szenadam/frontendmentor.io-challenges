import { resolve } from "path";

export default {
  css: {
    devSourcemap: true,
  },
  base: 'frontendmentor.io-challenges/04-tech-book-club-landing-page/dist',
  resolve: {
    alias: {
      $fonts: resolve("./public/assets/fonts/"),
      $images: resolve("./public/assets/images/"),
    }
  }
}
