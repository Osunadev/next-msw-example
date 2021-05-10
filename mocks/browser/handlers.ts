import { rest } from 'msw';

const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API;

export const handlers = [
  rest.post(`${contactApiUrl}/contact`, (req, res, ctx) => {
    const { name, company, email, message } = req.body as {
      [key: string]: string;
    };

    if (!name || !company || !email || !message) {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Please fill all of the fields!',
          error: true,
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: `Thank you for trusting us, ${name}, we'll get in touch with you asap!`,
        error: false,
      }),
    );
  }),
];
