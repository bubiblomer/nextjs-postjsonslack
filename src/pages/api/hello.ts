// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // parse the request body
    const body = JSON.parse(req.body);

    // get the message text from the request body
    // const message = body.message;
    console.log(body);

    // send a response
    res.status(200).json({ body });
  } else {
    // handle other HTTP methods
    res.status(405).end();
  }
}
