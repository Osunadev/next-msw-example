import React from 'react';
import clsx from 'clsx';

import styles from './Layout.module.scss';

type LayoutProps = {
  as?: string;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, as = 'div', className }) => {
  return React.createElement(
    as,
    { className: clsx(styles.layout, className) },
    children
  );
};

export default Layout;
