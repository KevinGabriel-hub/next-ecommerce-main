import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '@sanity/client'

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-04-21', // use current UTC date - see "specifying API version"!
    token: process.env.SANITY_API_TOKEN, // or leave blank for unauthenticated usage
    useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
}

const builder = imageUrlBuilder(config)
const urlFor = (source) => builder.image(source)


const client = sanityClient(config)

export { urlFor, client }