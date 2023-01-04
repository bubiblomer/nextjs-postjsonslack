// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body);
    console.log(req.body.paymentIntent.id);

    // parse the request body
    //const body = JSON.parse(req.body);

    // get the message text from the request body
    //const message = body.message;

    // send a response
    res.status(200);
  } else {
    // handle other HTTP methods
    res.status(405).end();
  }
}
