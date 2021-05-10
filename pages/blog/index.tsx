import Head from 'next/head';

import fetch from 'node-fetch';

import Layout from '../../components/layout/Layout';

import type { BlogPost } from '../../utils/definitions';
import Post from '../../components/post/Post';

import styles from './blog.module.scss';
import axios from 'axios';

const contentApiUrl = process.env.SERVER_CONTENT_API;

const GetPostsError = {
  props: {
    error: 'Sorry, we had problems getting the blog posts, try again later.',
  },
};

export const getStaticProps = async (ctx) => {
  try {
    const response = await axios.get(`${contentApiUrl}/blog-posts`);

    const posts: BlogPost[] = response.data;

    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    return GetPostsError;
  }
};

interface BlogProps {
  posts?: BlogPost[];
  error?: string;
}

const Blog: React.FC<BlogProps> = ({ posts, error }) => (
  <>
    <Head>
      <title>Sunny Digital Agency ™ - Blog</title>
    </Head>
    <Layout>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1>Blog</h1>
          <p className={styles.blogDescription}>
            Because we love dogs so much, we like to take pictures of clients
            dogs and then make a post about that dog's story, told by its owner.
            Enjoy the following list!
          </p>
          <div className={styles.postsList}>
            {posts?.map((post) => (
              <Post key={post.title} {...post} />
            ))}
          </div>
        </>
      )}
    </Layout>
  </>
);

export default Blog;
