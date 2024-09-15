import { readdirSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const project = req.body ? req.body.project : res.status(400).json({ text: "Error, invalid project" });
    const photos = readdirSync(`/${process.cwd()}/public/${project}/`);

    console.log(photos)

    res.status(200).json({ photos: photos });
}