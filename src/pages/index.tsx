import React from "react"
import Icon from "@mdi/react"
import { Helmet } from "react-helmet"
import { Link, useIntl } from "gatsby-plugin-react-intl"
import { mdiGithub, mdiLinkedin, mdiEmail, mdiPost } from "@mdi/js"
import Tooltip from "../components/Tooltip"
import * as styles from "./index.module.scss"

const Home: React.FC = () => {
  const intl = useIntl()
  return (
    <main className={styles.container}>
      <Helmet>
        <title>Juan Gama</title>
      </Helmet>
      <picture>
        <img
          src="https://picsum.photos/1000/1000"
          alt={intl.formatMessage({ id: "home-picture-alt" })}
          className={styles.profileImage}
        />
      </picture>
      <h1 className={styles.inverted}>
        <span>Juan Carlos&nbsp;</span>
        <span>Gama Roa</span>
      </h1>

      <ul className={styles.contactContainer}>
        <li className={styles.icon}>
          <Tooltip message={intl.formatMessage({ id: "home-github-tooltip" })}>
            <a href="https://github.com/JuanCarlosUNAL">
              <Icon path={mdiGithub} />
            </a>
          </Tooltip>
        </li>
        <li className={styles.icon}>
          <Tooltip
            message={intl.formatMessage({ id: "home-linkedin-tooltip" })}
          >
            <a href="https://www.linkedin.com/in/juancarlosgama">
              <Icon path={mdiLinkedin} />
            </a>
          </Tooltip>
        </li>
        <li className={styles.icon}>
          <Tooltip message={intl.formatMessage({ id: "home-email-tooltip" })}>
            <a href="mailto://juan19932carlos@gmail.com">
              <Icon path={mdiEmail} />
            </a>
          </Tooltip>
        </li>
        <li className={styles.icon}>
          <Tooltip message={intl.formatMessage({ id: "home-blog-tooltip" })}>
            <Link to="/wltw">
              <Icon path={mdiPost} />
            </Link>
          </Tooltip>
        </li>
      </ul>
    </main>
  )
}

export default Home
