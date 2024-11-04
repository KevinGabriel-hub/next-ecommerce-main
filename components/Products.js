import React, { useState, useLayoutEffect } from 'react'
import SecTitle from './SecTitle'
import Image from 'next/image'
import { urlFor } from '../sanity'
import Link from 'next/link'
import { EyeIcon } from '@heroicons/react/solid'

export default function Products() {
    const [latestProducts, setLatestProducts] = useState([])

    useLayoutEffect(() => {
        async function getLatest() {
            const fetchLatest = await fetch('/api/products?latest=true').then(res => res.json())
            setLatestProducts(fetchLatest)
        }
        getLatest()
    }, [])

    return (
        <section className="section py-10">
            <div className="wrapper max-w-screen-xl mx-auto">
                <SecTitle name="latest products" />
                <div className="categories grid grid-cols-4 gap-5 mt-6">
                    {latestProducts.map(product => (
                        <div key={product._id} className="productBox bg-white border-2 border-gray-800 border-solid rounded-lg p-4">
                            <div className="productImage relative w-full h-80">
                                <div className="price absolute top-0 left-0 bg-red-500 text-white text-lg p-2 rounded-lg">
                                    $<span className="text-white text-2xl font-medium px-1">{product.price}</span>/-
                                </div>
                                <Link href={`/product/${product._id}`}>
                                    <button className="view absolute group top-0 right-0 bg-white py-2 px-4 rounded-lg border-2 border-solid border-gray-800 hover:bg-gray-800 cursor-pointer z-10">
                                        <EyeIcon className="w-7 h-7 fill-gray-700 group-hover:fill-white" />
                                    </button>
                                </Link>
                                <Image src={urlFor(product.productImage).url()} layout="fill" objectFit="contain" objectPosition="center" />
                            </div>
                            <h3 className="font-medium text-xl text-gray-700 text-center py-4">{product.title}</h3>
                            <input type="number" className="w-full border-2 border-solid border-gray-800 rounded-lg p-3 text-xl text-gray-700 font-medium" min="1" defaultValue="1" />
                            <Link href="/wishlist">
                                <button className="w-full bg-yellow-500 btn__style mt-4 mb-3 capitalize">add to wishlist</button>
                            </Link>
                            <Link href="/cart">
                                <button className="w-full bg-green-500 btn__style capitalize">add to cart</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
