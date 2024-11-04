import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function register() {
    return (
        <section className="bg-white w-full h-screen flex items-center justify-center">
            <Head>
                <title>register page</title>
            </Head>

            <form className="w-[40rem] border-2 border-gray-700 border-solid rounded-lg p-4">
                <h2 className="text-center text-4xl uppercase text-gray-800 font-semibold pb-5">register now</h2>
                <input type="text" placeholder="enter your name" className="border-gray-800 border-solid border-2 rounded-lg w-full p-3 text-xl text-gray-800" />
                <input type="email" placeholder="enter your email" className="border-gray-800 border-solid border-2 rounded-lg w-full p-3 text-xl text-gray-800 my-5" />
                <input type="password" placeholder="enter your password" className="border-gray-800 border-solid border-2 rounded-lg w-full p-3 text-xl text-gray-800" />
                <input type="password" placeholder="confirm your password" className="my-5 border-gray-800 border-solid border-2 rounded-lg w-full p-3 text-xl text-gray-800" />
                <input type="file" className="border-gray-800 border-solid border-2 rounded-lg w-full p-3 text-xl text-gray-800" />
                <button className="w-full bg-green-600 btn__style my-5">Register Now</button>
                <div className="text-gray-600 text-2xl font-normal text-center">
                    already have an account?
                    <Link href="/login">
                        <span className="text-green-600 cursor-pointer hover:underline"> login now</span>
                    </Link>
                </div>
            </form>
        </section>
    )
}
