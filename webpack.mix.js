let mix = require("laravel-mix")
let tailwindcss = require("tailwindcss")
require("laravel-mix-purgecss")

mix
  .sass("src/main.scss", "dist")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.js")]
  })
  .purgeCss({
    enabled: true,
    globs: ["index.html"],
    extensions: ["html"]
  })
  .setPublicPath("dist")
