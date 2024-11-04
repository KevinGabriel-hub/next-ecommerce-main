import { client } from '../../sanity'

export default async function products(req, res) {
    const { method, query: { latest } } = req

    if (method === 'GET' && latest === 'true') {
        const latestQuery = `
        *[_type=="product" && latest==true]{
            _id,
            inStock,
            price,
            productImage,
            title
          }
        `
        const fetchLatest = await client.fetch(latestQuery)
        res.status(200).json(fetchLatest)
    } else {
        res.status(200).json({ name: 'hello' })
    }
}
