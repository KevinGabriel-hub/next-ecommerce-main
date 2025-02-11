import React from 'react'
import { ChevronRightIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function MainFooter() {
    return (
        <footer className="footer bg-white">
            <div className="wrapper max-w-screen-xl mx-auto grid grid-cols-4 gap-4 pt-8 pb-9">
                <div className="quick">
                    <h3 className="uppercase text-2xl font-semibold text-gray-800">quick links</h3>
                    <Link href="/">
                        <div className="link flex items-center gap-2 my-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">home</span>
                        </div>
                    </Link>

                    <Link href="/shop">
                        <div className="link flex items-center gap-2 mb-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">shop</span>
                        </div>
                    </Link>

                    <Link href="/about">
                        <div className="link flex items-center gap-2 mb-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">about</span>
                        </div>
                    </Link>

                    <Link href="/contact">
                        <div className="link flex items-center gap-2">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">contact</span>
                        </div>
                    </Link>
                </div>


                <div className="extra">
                    <h3 className="uppercase text-2xl font-semibold text-gray-800">extra links</h3>
                    <Link href="/cart">
                        <div className="link flex items-center gap-2 my-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">cart</span>
                        </div>
                    </Link>

                    <Link href="/wishlist">
                        <div className="link flex items-center gap-2 mb-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">wishlist</span>
                        </div>
                    </Link>

                    <Link href="/login">
                        <div className="link flex items-center gap-2 mb-4">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">login</span>
                        </div>
                    </Link>

                    <Link href="/register">
                        <div className="link flex items-center gap-2">
                            <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                            <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">register</span>
                        </div>
                    </Link>
                </div>


                <div className="contact">
                    <h3 className="uppercase text-2xl font-semibold text-gray-800">contact info</h3>
                    <div className="link flex items-center gap-2 my-4">
                        <PhoneIcon className="w-6 h-6 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium">+123-456-7890</span>
                    </div>

                    <div className="link flex items-center gap-2 mb-4">
                        <PhoneIcon className="w-6 h-6 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium">+111-222-3456</span>
                    </div>

                    <div className="link flex items-center gap-2 mb-4">
                        <MailIcon className="w-6 h-6 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium">your-mail@gmail.com</span>
                    </div>

                    <div className="link flex items-center gap-2 mb-4">
                        <LocationMarkerIcon className="w-6 h-6 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium">stockholm, sweden - 345244</span>
                    </div>
                </div>


                <div className="social">
                    <h3 className="uppercase text-2xl font-semibold text-gray-800">follow us</h3>
                    <a href="http://www.facebook.com" target="_blank" className="link flex items-center gap-2 my-4">
                        <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline">facebook</span>
                    </a>

                    <a href="http://www.instagram.com" target="_blank" className="link flex items-center gap-2 mb-4">
                        <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">instagram</span>
                    </a>

                    <a href="http://www.twitter.com" target="_blank" className="link flex items-center gap-2 mb-4">
                        <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">twitter</span>
                    </a>

                    <a href="http://www.linkedin.com" target="_blank" className="link flex items-center gap-2">
                        <ChevronRightIcon className="w-7 h-7 fill-green-500" />
                        <span className="text-gray-500 text-xl font-medium hover:text-green-500 hover:underline cursor-pointer">linked in</span>
                    </a>
                </div>
            </div>

            <div className="credit text-xl text-gray-700 font-medium border-0 border-t-2 border-solid border-gray-800 text-center py-5">
                © copyright @ 2022 by <span className="text-xl text-green-700 font-medium">sunny islam</span> | all rights reserved!
            </div>
        </footer>
    )
}
