// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '../../sanity'

export default async function getCat(req, res) {
    const query = `
    *[_type=="category"]{
        _id,
        catImage,
        description,
        'slug': slug.current,
        title
    }
    `
    const cats = await client.fetch(query)
    res.status(200).json(cats)
}
