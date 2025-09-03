"use client"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Footer from "@/Components/Footer";


export default function Home() {
  const { data: session } = useSession();
  return (<>
    <main className="flex relative flex-col items-center justify-between mt-20">
      <div className="flex gap-2 items-center">
        <p className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_#facc15]">
          Buy Me Biryani</p>
        <img className="rounded-full" src="buyme.gif" width={50} alt="" />
      </div>
      <div className="text-center p-2">
      <p className="mt-4 text-lg">crowd-funding platform for content creators.</p>
      <p>A place where your fans can fund your work and support you directly.</p>
      </div>
      <div className="flex gap-4 mt-6 items-center mb-20">
        <Link href={"/Login"}>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            disabled={!!session}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Start here
            </span>
          </button>
        </Link>
        <Link href={"/About"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent"> Read more</span>
          </button></Link>
      </div>
      <div className="partition w-full h-1 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 mb-20"></div>
      <div className="w-full flex max-sm:flex-col  justify-around mb-20">
        <div className="flex flex-col gap-2 max-sm:w-full items-center justify-center p-5 text-center mb-5 w-1/3">
          <img className="rounded-full" width={50} src="help.svg" alt="" />
          <p className="font-bold">your fans can help</p>
          <p>your fans are available to support you</p>
        </div>
        <div className="flex flex-col gap-2 items-center max-sm:w-full justify-center p-5 text-center mb-5 w-1/3">
          <img className="rounded-full" width={50} src="contribute.svg" alt="" />
          <p className="font-bold">your fans can contribute</p>
          <p>your fans are willing to contribute to your work</p>
        </div>
        <div className="flex flex-col gap-2 items-center max-sm:w-full justify-center p-5 text-center mb-5 w-1/3">
          <img className="rounded-full" width={50} src="collaborate.svg" alt="" />
          <p className="font-bold">your fans can collaborate</p>
          <p>your fans are willing to collaborate with you</p>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
