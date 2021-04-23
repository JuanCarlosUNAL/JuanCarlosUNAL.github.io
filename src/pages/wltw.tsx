import {graphql} from 'gatsby';
import React from 'react';
import useCurrentLang from '../hooks/useCurrentLang';
import { GetAllPostsQuery } from "../../gatsby-graphql";
import {useIntl} from 'react-intl';
import * as styles from "./wltw.module.scss";
import {Link} from 'gatsby-plugin-react-intl';
import Card from '../components/Card';

export type Unpacked<T> = T extends (infer U)[] ? U : {}

interface BlogIndexProps {
  data: GetAllPostsQuery,
}

type PostEntryProps = Unpacked<GetAllPostsQuery['allMdx']['nodes']>;

const PostEntry: React.FC<PostEntryProps> = ({id, frontmatter, excerpt, slug}) => {
  const name = slug?.split('/')[2] || "";
  const link = `/wltw/${name}`;
  return (
    <Link key={id} className={styles.link} to={link}>
      <Card className={styles.entryContainer}>
        <h2>{frontmatter?.title} </h2>
        <p>{excerpt}</p>
        <span>{frontmatter?.date}</span>
      </Card>
    </Link>
  )
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
  const lang = useCurrentLang();
  const intl = useIntl();
  const entries = data.allMdx.nodes
    .filter(({ slug }) => slug?.substring(13, 15) === lang);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{intl.messages['blog-title']}</h1>
      <span className={styles.subtitle}>{intl.messages['blog-sub']}</span>
      <section className={styles.entriesContainer}>
        {entries.map(PostEntry)}
      </section>
    </main>
  )
};

export const query = graphql`
  query getAllPosts {
    allMdx(sort: {fields: frontmatter___date}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY")
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default BlogIndex;

