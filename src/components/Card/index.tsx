import React, { HTMLProps } from "react"
import * as styles from "./card.module.scss"

const Card: React.FC<HTMLProps<HTMLDivElement>> = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
)

export default Card
