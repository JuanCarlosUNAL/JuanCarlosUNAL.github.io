import React from "react";
import * as styles from './styles.module.scss';

interface TooltipProps {
  children: React.ReactNode | React.ReactNodeArray;
  message: string;
}

const Tooltip: React.FC<TooltipProps> = ({children, message}) => (
  <div className={styles.tooltipContainer}>
    <div className={styles.content}>
      <p>
        {message}
      </p>
    </div>
    {children}
  </div>
);

export default Tooltip

