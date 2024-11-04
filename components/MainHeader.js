import Link from 'next/link'
import { UserIcon, SearchIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useState } from 'react'

export default function MainHeader() {
    const [showUser, setShowUser] = useState(false)
    return (
        <header className="header py-6 bg-white shadow-md sticky top-0 left-0 z-50">
            <div className="wrapper max-w-screen-xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h2 className="text-gray-600 text-3xl font-normal cursor-pointer">Groco<span className="text-green-500">.</span></h2>
                </Link>

                <nav className="space-x-6">
                    <Link href="/">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">home</button>
                    </Link>
                    <Link href="/shop">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">shop</button>
                    </Link>
                    <Link href="/orders">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">orders</button>
                    </Link>
                    <Link href="/about">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">about</button>
                    </Link>
                    <Link href="/contact">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">contact</button>
                    </Link>
                </nav>

                <div className="icons flex gap-4 items-center">
                    <div className="relative">
                        <UserIcon onClick={() => setShowUser(state => !state)} className="w-9 h-9 fill-gray-500 cursor-pointer hover:fill-green-500 transition-colors" />
                        <div className={`${showUser ? 'block' : 'hidden'} userProfile w-[26rem] bg-white p-6 absolute top-full -left-40 border-2 border-gray-600 border-solid rounded-xl overflow-hidden`}>
                            <div className="userAvatar relative w-40 h-40 rounded-full overflow-hidden mx-auto">
                                <Image src="/images/pic-1.png" layout="fill" objectPosition="left" objectFit="cover" />
                            </div>
                            <h3 className="text-2xl text-gray-500 font-normal text-center py-4">user A</h3>
                            <Link href="/profile">
                                <button className="w-full bg-green-500 btn__style mb-4">Update Profile</button>
                            </Link>
                            <Link href="/profile">
                                <button className="w-full bg-red-500 btn__style">Log Out</button>
                            </Link>
                        </div>
                    </div>
                    <Link href="/search">
                        <SearchIcon className="w-9 h-9 fill-gray-500 cursor-pointer hover:fill-green-500 transition-colors" />
                    </Link>
                    <Link href="/wishlist">
                        <div className="flex text-xl text-gray-500 items-end group hover:text-green-500 transition-all cursor-pointer">
                            <HeartIcon className="w-9 h-9 fill-gray-500 group-hover:fill-green-500 transition-all" />
                            (<span className="text-gray-500 group-hover:text-green-500 transition-all">0</span>)
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex text-xl text-gray-500 items-end group hover:text-green-500 transition-all cursor-pointer">
                            <ShoppingCartIcon className="w-9 h-9 fill-gray-500 group-hover:fill-green-500 transition-all" />
                            (<span className="text-gray-500 group-hover:text-green-500 transition-all">0</span>)
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
