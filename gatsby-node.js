const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// NOTE: Commented out as not currently using a blog
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//                 langKey
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog posts pages.
//   const posts = result.data.allMarkdownRemark.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: post.node.fields.slug,
//       component: blogPost,
//       context: {
//         slug: post.node.fields.slug,
//         langKey: post.node.fields.langKey,
//         previous,
//         next,
//       },
//     })
//   })
// }

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // SOURCE: https://github.com/gaearon/overreacted.io/commit/18c7308
  if (
    node.internal.type === `MarkdownRemark` &&
    node.internal.fieldOwners.slug !== "gatsby-plugin-i18n"
  ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
