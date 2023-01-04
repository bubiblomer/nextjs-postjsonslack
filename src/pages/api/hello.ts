// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name } = req.body;
    console.log(name);
    console.log(req.body.paymentIntent.id);

    res.status(200).send('Success');
  } else {
    // handle other HTTP methods
    res.status(405).end();
  }
}
