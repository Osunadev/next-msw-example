import { rest } from 'msw';

import POSTS from './posts.data';

const contentApiUrl = process.env.SERVER_CONTENT_API;

const successResponseHandler = rest.get(
  `${contentApiUrl}/blog-posts`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(POSTS));
  },
);

const failureResponseHandler = rest.get(
  `${contentApiUrl}/blog-posts`,
  (req, res, ctx) => {
    return res(ctx.status(400));
  },
);

export { successResponseHandler, failureResponseHandler };
