import React from 'react'
import Filter from "@/app/_components/Filter";
import Carousel from "@/app/_components/Carousel";
import Link from "next/link";


const TopDestination =  ({
                                  searchParams,
                              }: {
    searchParams: { category: string };
}) => {

    return (
        <div className="w-full relative h-dvh py-5 overflow-x-hidden ">
            <div className="relative overflow-hidden">
                <h1 className="font-heading-font text-4xl font-bold">Top Destination</h1>
            </div>
            <Filter/>
            <div className="relative h-[85%] w-full  mt-3 flex flex-col items-center">
                <div className="relative overflow-hidden w-full h-[90%] px-5">
                    <Carousel/>
                </div>
                <Link href="/"
                      className={`text-md font-subHeading-font font-bold px-5 py-2 border-2  rounded-full border-primary-black dark:border-primary-white hover:bg-slate-400  hover:border-0 transition`}>Plan
                    your trip</Link>
            </div>

        </div>
    )
}
export default TopDestination
