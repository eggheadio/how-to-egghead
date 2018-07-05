const remarkHighlight = require("remark-highlight.js")
const remarkSlug = require("remark-slug")
const remarkAutolinkHeadings = require("remark-autolink-headings")

module.exports = {
  pageExtensions: ["js", "md"],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            behaviour: "wrap",
            mdPlugins: [remarkHighlight, remarkSlug, remarkAutolinkHeadings]
          }
        }
      ]
    })

    return config
  }
}
