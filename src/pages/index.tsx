import React from "react";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import Tooltip from "../components/Tooltip";
import * as styles from "./styles.module.scss";

const Home: React.FC = () => (
  <main className={styles.container}>
    <img src="https://picsum.photos/1000/1000" alt="profile photo" className={styles.profileImage} />
    <h1 className={styles.inverted}>
      <span>Juan Carlos&nbsp;</span>
      <span>Gama Roa</span>
    </h1>

    <ul className={styles.contactContainer}>
      <li className={styles.icon}>
        <Tooltip message="foollow me at github">
          <a href="https://github.com/JuanCarlosUNAL">
            <Icon path={mdiGithub}/>
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
    </ul> 
  </main>
);

export default Home;

