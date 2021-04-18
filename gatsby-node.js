const path = require('path');

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          slug
          id
        }
      }
    }
  `);

  for (const { slug, id } of result.data.allMdx.nodes) {
    const [_, lang, name] = slug.split('/')
    createPage({
      path: `wltw/${name}`,
      component: path.resolve(`./src/blog-entries/blog-template.tsx`),
      context: {
        id,
      },
    })
  }

}


