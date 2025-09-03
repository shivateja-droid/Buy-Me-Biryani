"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const { data: session } = useSession()
    const [IsOpen, setIsOpen] = useState(false)

    return (
        <div className='flex justify-between items-center gap-2  p-4  bg-slate-800'>
            <Link href="/"><div className='flex items-center gap-2'>
                <img className='rounded-full' src="buyme.gif" width={50} alt="" />
                <p className='text-center font-bold max-sm:text-lg text-xl md:text-2xl'>Buy Me Biryani</p>
            </div></Link>
            <div className='flex gap-2 items-center'>
                {session && <div className='relative'>
                    <button onClick={() => setIsOpen(!IsOpen)} onBlur={() => {
                        setTimeout(() => {
                            setIsOpen(false)
                        }, 500);
                    }} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 me-2 rounded-full" src="dp.jpg" alt="user photo" />
                        <p className="text-xl max-sm:text-sm md:text-2xl font-extrabold text-green-400 tracking-widest uppercase  drop-shadow-[2px_2px_0px_black]">{session.user.name}</p>
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdownAvatarName" className={`z-10 ${IsOpen ? "" : "hidden"}  bg-white divide-y absolute divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="font-medium ">Pro User</div>
                            <div className="truncate">{session.user.email}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link href={`${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
                            </li>
                            <li>
                                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                            </li>
                        </ul>
                        <div className="py-2 ">
                            <button
                                type="button"
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white rounded-lg"
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>}
                {!session && <div><Link href={"/Login"}>
                    <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">login</button></Link>
                </div>}
            </div>
        </div>
    )
}

            export default Navbar

