const toString = require("mdast-util-to-string")
const visit = require("unist-util-visit")
const slugs = require("github-slugger")()

/*
    Before:
    <h1>What is egghead</h1>
    
    After:
    <h1 id="what-is-egghead">
      <a href="#what-is-egghead">What is egghead?</a>
    </h1>
  */
module.exports = () => ast => {
  slugs.reset()

  visit(ast, "heading", node => {
    const id = slugs.slug(toString(node))

    node.data = node.data || {}
    node.data.hProperties = node.data.hProperties || {}

    node.data.id = node.data.hProperties.id = id

    node.children = [
      {
        type: "link",
        url: "#" + node.data.hProperties.id,
        title: null,
        children: node.children
      }
    ]
  })
}
