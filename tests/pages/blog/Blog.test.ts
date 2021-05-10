import { setupServer } from 'msw/node';

import { getStaticProps } from '../../../pages/blog';
import type { BlogPost } from '../../../utils/definitions';

import * as handlers from './handlers';
import POSTS from './posts.data';

describe('Blog page test', () => {
  /* Set up the request interception layer */
  const server = setupServer();

  /* Start requests interception before all tests start */
  beforeAll(() => {
    server.listen();
  });

  /* Remove requests handlers that were added on runtime  */
  afterEach(() => {
    server.resetHandlers();
  });

  /* Stop requests interception after all tests finish */
  afterAll(() => {
    server.close();
  });

  it('getStaticProps returns successfully the posts prop', async () => {
    server.use(handlers.successResponseHandler);

    const { props } = await getStaticProps({});
    const { posts } = props as { posts: BlogPost[] };

    expect(posts).toMatchObject(POSTS);
  });

  it('getStaticProps returns an error prop on failure', async () => {
    server.use(handlers.failureResponseHandler);

    const { props } = await getStaticProps({});
    const { error } = props as { error: string };

    expect(error).toBe(
      'Sorry, we had problems getting the blog posts, try again later.'
    );
  });
});
