const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(filter: { frontmatter: { lang: { eq: "en" } } }) {
        nodes {
          slug
        }
      }
    }
  `)

  for (const { slug } of result.data.allMdx.nodes) {
    const [_, _lang, name] = slug.split("/")
    createPage({
      path: `wltw/${name}`,
      component: path.resolve(`./src/blog-entries/blog-template.tsx`),
      context: {
        pattern: `/\/${name}/`,
      },
    })
  }
}
