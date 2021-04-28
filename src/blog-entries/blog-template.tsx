import React from "react"
import { graphql } from "gatsby"
import { GetPostsQuery } from "../../gatsby-graphql"

import * as styles from "./blog.module.scss"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface BlogTemplateProps {
  data: GetPostsQuery
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  const [post] = data.allMdx.nodes
  return (
    <div className={styles.blogContent}>
      <h1>{post.frontmatter?.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query getPosts($pattern: String!, $language: String = "en") {
    allMdx(
      filter: {
        slug: { regex: $pattern }
        frontmatter: { lang: { eq: $language } }
      }
    ) {
      nodes {
        slug
        body
        frontmatter {
          title
        }
      }
    }
  }
`

export default BlogTemplate
