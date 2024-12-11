import React from 'react'
import bgImage from  "@/app/_asset/world_map_transparent.png";
import sea from  "@/app/_asset/sea.jpg";
import forest from  "@/app/_asset/pain.jpg";
import desert from  "@/app/_asset/savana.jpg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    return (
        <div className="h-dvh w-full relative overflow-x-hidden pt-14 pb-5 flex flex-col">
        <div className="h-1/2 w-full  relative">
         <div className="relative overflow-hidden pt-2">
             <h1 className="font-heading-font text-4xl font-bold">Discover the World&#39;s <span className="text-slate-400">Hidden</span> Wonders</h1>
         </div>
            <div className="mt-3 relative overflow-hidden ">
                <p className="font-content-font text-md font-[400]">
                    Discover the world’s most enchanting destinations on our tourism blog! From serene beaches to majestic mountains, vibrant cityscapes to hidden gems, we bring you travel inspiration, tips, and stories to fuel your wanderlust. Plan your next adventure with detailed guides and breathtaking visuals, making every journey unforgettable. Let’s explore the beauty of our world, one destination at a time!
                </p>
            </div>
        </div>
            <div className="h-1/2 w-full  relative flex flex-col">
                <Image src={bgImage} alt="home-img" fill className="absolute object-cover z-0"/>
                <div className="h-full w-full relative flex flex-col items-center gap-4">
                    <div className="h-[75%] w-full relative  grid grid-cols-2 grid-rows-2 gap-4 overflow-hidden px-5 cursor-pointer">
                        <div className="row-span-2 bg-red rounded-md overflow-hidden relative ">
                            <Image src={desert} alt="savana" fill className="hover:scale-110 transition"/>
                        </div>
                        <div className="overflow-hidden relative rounded"><Image src={forest} alt="savana" fill  className="hover:scale-110 transition"/></div>
                        <div className="col-start-2 overflow-hidden relative rounded"><Image src={sea} alt="savana" fill className="hover:scale-110 transition"/></div>
                    </div>
                    <Link href="/" className={`text-md font-subHeading-font font-bold px-5 py-2 border-2  rounded-full border-primary-black dark:border-primary-white hover:bg-slate-400  hover:border-0 transition`}>Plan your trip</Link>
                </div>
            </div>
        </div>
    )
}
export default Home
