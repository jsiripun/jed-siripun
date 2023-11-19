import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const color = req.body ? req.body.color : 'No color'
    res.status(200).json({ text: `howdy hey ${color}` });
  }