import htmlPurge from "vite-plugin-html-purgecss";

export default {
  server: {
    port: 8080,
    hot: true,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [htmlPurge({ safelist: [/show/, /hide/] })],
};
