import { useLayoutEffect, useState } from 'react'
import SecTitle from './SecTitle'
import Image from 'next/image'
import { urlFor } from '../sanity'
import Link from 'next/link'

export default function Cats() {
    const [categories, setCategories] = useState([])

    useLayoutEffect(() => {
        async function getCats() {
            const cats = await fetch('api/getCat').then(res => res.json())
            setCategories(cats)
        }
        getCats()
    }, [])

    return (
        <section className="section py-10">
            <div className="wrapper max-w-screen-xl mx-auto">
                <SecTitle name="shop by category" />
                <div className="categories grid grid-cols-4 gap-5 mt-6">
                    {categories.map(category => (
                        <div key={category._id} className="catBox bg-white border-2 border-gray-800 border-solid rounded-lg p-6">
                            <div className="catImage relative w-full h-80">
                                <Image src={urlFor(category.catImage).url()} layout="fill" objectFit="contain" objectPosition="center" />
                            </div>
                            <h1 className="text-center text-2xl text-gray-700 font-semibold uppercase py-6">{category.title}</h1>
                            <p className="text-center text-xl text-gray-500 font-medium leading-normal">{category.description}</p>
                            <Link href={`/cat/${category.slug}`}>
                                <div className="text-center">
                                    <button className="bg-green-500 btn__style px-6 mt-4">{category.title}</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
