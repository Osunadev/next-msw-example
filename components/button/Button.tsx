import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps {
  secondary?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  secondary,
  className,
}) => (
  <button
    onClick={onClick}
    className={clsx(
      styles.button,
      {
        [styles.secondaryButton]: secondary,
      },
      className
    )}
  >
    {children}
  </button>
);

export default Button;
