import React from "react";
import {graphql} from "gatsby";
import {LandingPageQuery} from "../../gatsby-graphql";

import * as styles from "./styles.module.scss";

interface HomeProps {
  data: LandingPageQuery;
}

const Home: React.FC<HomeProps> = () => {
  return (
    <main className={styles.container}>
        <img src="https://picsum.photos/1000/1000" alt="profile photo" className={styles.profileImage} />
        <h1 className={styles.inverted}>
          <span>Juan Carlos&nbsp;</span>
          <span>Gama Roa</span>
        </h1>
        
        <ul>
          <li>facebook</li>
          <li>instagram</li>
          <li>linkedIn</li>
        </ul> 
    </main>
  );
};

export const query = graphql`
query LandingPage {
  site {
    siteMetadata {
      title
    }
  }
}`;

export default Home;

