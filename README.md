# Getting Started

This is a Next.js project that demonstrates 2 use cases when using `msw`.

- To **run the app**, just run `npm run dev` in your terminal and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
- To **test the app**, just run `npm run test` in your terminal.

---

## Using `msw` for development.

It's a very common scenario when we're developing the Frontend side of a full-stack app, and the backend team it's a little bit behind us. This is where `msw` comes in handy because we can mock those endpoints that our application needs but that aren't ready yet (not implemented on the backend).

In this example we are mocking `/contact` endpoint of our API `https://api.sunnydigitalagency.com`, this way we can intercept any HTTP request that our browser does to that API (thanks to the use of Service Workers), and send back fake responses without hitting the real API, cool right? And the best part is that we don't need to spin up a separate mock server and that we can see how requests are being made through the browser's Network Tab.

- `https://api.sunnydigitalagency.com` API doesn't exists, it's just an example, but this could be whatever API you're making requests to.

## Using `msw` for testing.

When testing code that makes any kind of Network Request, we usually mock whatever library we are using (i.e. `axios`) or, we use a separate library that helps us mocking our library requests (i.e. `axios-mock-adapter`), because we don't want to be hitting the actual API in our tests.

Although this is a valid approach, it might add a little bit of overhead, and, what happens if your library API changes? What if you are mocking `axios.get()` and expecting a `data` property, but now in v0.3, it's renamed to `body`? We can avoid these kind of issues using `msw`, because it's library agnostic and doesn't mock implementation details.

In this example we are mocking `/blog-posts` endpoint of our API `http://localhost:3000/api`, once again, this is just an example API url, but this can be replaced for whatever API you're using in your project.

Service Workers only work on the Browser, that's why instead of having to call `setupWorker()` in our tests, we call a special method: `setupServer()`. And, this isn't an actual server (I know the method name could be misleading), it's just initializing a request interception layer so that we can catch all of our network requests that we make from now on.
