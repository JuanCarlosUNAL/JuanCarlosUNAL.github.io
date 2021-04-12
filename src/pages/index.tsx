import React from "react";
import { Link } from "gatsby";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail, mdiPost } from "@mdi/js";
import Tooltip from "../components/Tooltip";
import * as styles from "./index.module.scss";
import {Helmet} from "react-helmet";

const Home: React.FC = () => (
  <main className={styles.container}>
    <Helmet>
      <title>Juan Gama</title>
    </Helmet>
    <picture>
      <img src="https://picsum.photos/1000/1000" alt="profile photo" className={styles.profileImage} />
    </picture>
    <h1 className={styles.inverted}>
      <span>Juan Carlos&nbsp;</span>
      <span>Gama Roa</span>
    </h1>

    <ul className={styles.contactContainer}>
      <li className={styles.icon}>
        <Tooltip message="foollow me at github">
          <a href="https://github.com/JuanCarlosUNAL">
            <Icon path={mdiGithub} alt="github"/>
          </a>
        </Tooltip>
      </li>
      <li className={styles.icon}>
        <Tooltip message="take a look to my linkedIn">
          <a href="https://www.linkedin.com/in/juancarlosgama">
            <Icon path={mdiLinkedin}/>
          </a>
        </Tooltip>
      </li>
      <li className={styles.icon}>
        <Tooltip message="send me a message">
          <a href="mailto://juan19932carlos@gmail.com">
            <Icon path={mdiEmail}/>
          </a>
        </Tooltip>
      </li>
      <li className={styles.icon}>
        <Tooltip message="What I Learned this week">
          <Link to="/wltw">
            <Icon path={mdiPost}/>
          </Link>
        </Tooltip>
      </li>
    </ul> 
  </main>
);

export default Home;

