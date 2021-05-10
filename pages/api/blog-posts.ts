import { NextApiRequest, NextApiResponse } from 'next';

/*
  This is just a dummy API Route that helps us populating our blog posts when doing SSG,
  right now we're using it because of its simplicity.
  
  In a real project this could be a Headless CMS REST endpoint, a Serverless Function or
  whatever custom backend soultion we have.
*/
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.json([
      {
        date: 'May 24 2020',
        title: 'Adult Labrador retriever',
        description:
          'This is my beautiful dog, his name is Max and is 8 years old...',
        imageUrl:
          'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
      },
      {
        date: 'May 23 2020',
        title: 'Dog in the forest',
        description:
          'Dog in a forest at sunset dog in forest with sun rays http://www.waguluz.de',
        imageUrl:
          'https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg',
      },
      {
        date: 'May 20 2020',
        title: 'Dog profile pic',
        description:
          'Doggy with style. (instagram.com/toshi.dog/) black pug wearing striped apparel http://charlesdeluvio.com',
        imageUrl:
          'https://img.dummyapi.io/photo-1517423440428-a5a00ad493e8.jpg',
      },
      {
        date: 'May 15 2020',
        title: 'Dog posing at the wall',
        description:
          'Forgotten short-coat brown and white dog sitting near gray concrete wall during daytime https://www.behance.net/catvcarvalho',
        imageUrl:
          'https://img.dummyapi.io/photo-1507543139012-85b5900144e4.jpg',
      },
    ]);
  }

  // Unvalid http method
  res.status(405).end();
}
