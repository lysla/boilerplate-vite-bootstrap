import * as path from "path";
import * as fs from "fs";
import htmlPurge from "vite-plugin-html-purgecss";

const files = fs.readdirSync("./");
let array = [];
files.forEach((file) => {
  if (path.extname(file) === ".html") {
    let fname = path.basename(file, path.extname(file));
    let arrayEl = [fname, path.resolve(__dirname, file)];
    array.push(arrayEl);
  }
});
let object = Object.fromEntries(array);

export default {
  server: {
    port: 8080,
    hot: true,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: object,
      output: {
        entryFileNames: "dist/[name].js",
        chunkFileNames: "dist/[name].js",
        assetFileNames: "dist/[name][extname]",
      },
    },
  },
  plugins: [htmlPurge({ safelist: [/show/, /hide/, /stick/, /slick/] })],
};
