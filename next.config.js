const remarkHighlight = require('remark-highlight.js')

module.exports = {
  pageExtensions: ['js', 'md'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [remarkHighlight]
          }
        }
      ]
    })

    return config
  }
}
