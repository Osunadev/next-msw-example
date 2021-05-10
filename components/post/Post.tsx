import React from 'react';
import clsx from 'clsx';
import type { BlogPost } from '../../utils/definitions';

import styles from './Post.module.scss';

interface PostProps extends BlogPost {
  className?: string;
}

const Post: React.FC<PostProps> = ({
  className,
  date,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className={clsx(styles.blogPost, className)}>
      <img src={imageUrl} className={styles.postImage} />
      <div className={styles.textCol}>
        <span>{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Post;
