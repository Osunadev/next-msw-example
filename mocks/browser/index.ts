/* If process.broswer is deprecated, we can use instead typeof window !== undefined */

// @ts-ignore
if (process.browser && process.env.NODE_ENV === 'development') {
  const { worker } = require('./setup');
  worker.start();
}
