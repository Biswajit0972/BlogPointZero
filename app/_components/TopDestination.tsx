
import React, {Suspense} from 'react'
import Filter from "@/app/_components/Filter";
import Carousel from "@/app/_components/Carousel";
import Link from "next/link";
import sea from "@/app/_asset/sea.jpg";
import forest from "@/app/_asset/pain.jpg";
import desert from "@/app/_asset/savana.jpg";
import {StaticImageData} from "next/image";
import Loader from "@/app/_components/Loader";

type fakeData = {
    image: StaticImageData;
    heading: string;
    location: string;
    category: string;
}

const fakeData: fakeData[] = [
    {
        image: sea,
        heading: "Top 10 Beaches to Visit This Summer",
        location: "Maldives",
        category: "popular"
    },
    {
        image: forest,
        heading: "Breathtaking Mountain Hikes for Adventure Seekers",
        location: "Swiss Alps, Switzerland",
        category: "maxVisite"
    },
    {
        image: desert,
        heading: "Exploring the Vibrant Streets of Tokyo",
        location: "Tokyo, Japan",
        category: "highLike"
    },
    {
        image: sea,
        heading: "A Journey Through the Sahara Desert",
        location: "Morocco",
        category: "lowCost"
    },
    {
        image: forest,
        heading: "Hidden Islands You Must Explore",
        location: "Bora Bora, French Polynesia",
        category: "popular"
    },
    {
        image: desert,
        heading: "Top Historical Sites Around the Globe",
        location: "Rome, Italy",
        category: "maxVisited"
    },
    {
        image: sea,
        heading: "Discover the Wild Beauty of the Amazon",
        location: "Amazon Rainforest, Brazil",
        category: "highLike"
    },
    {
        image: forest,
        heading: "Magical Winter Destinations to Visit",
        location: "Lapland, Finland",
        category: "lowCost"
    },
    {
        image: sea,
        heading: "Dive into the Great Barrier Reef",
        location: "Australia",
        category: "popular"
    },
    {
        image: desert,
        heading: "A Cultural Tour Through India",
        location: "Rajasthan, India",
        category: "highLike"
    },
    { image: sea, heading: "Relax at the Blue Lagoon", location: "Iceland", category: "popular" },
    { image: forest, heading: "Explore the Black Forest", location: "Germany", category: "maxVisited" },
    { image: desert, heading: "The Mysteries of Machu Picchu", location: "Peru", category: "highLike" },
    { image: sea, heading: "Enjoy the Sunshine in the Bahamas", location: "Bahamas", category: "lowCost" },
    { image: forest, heading: "Wander the Redwood Forest", location: "California, USA", category: "popular" },
    { image: desert, heading: "Discover the Ancient City of Petra", location: "Jordan", category: "maxVisited" },
    { image: sea, heading: "Sail Through the Norwegian Fjords", location: "Norway", category: "highLike" },
    { image: forest, heading: "Admire the Cherry Blossoms", location: "Kyoto, Japan", category: "lowCost" },
    { image: sea, heading: "Snorkeling in the Maldives", location: "Maldives", category: "popular" },
    { image: desert, heading: "Stargazing in the Atacama Desert", location: "Chile", category: "highLike" }
];

const TopDestination =   ({filter}: {filter?: string}) => {

    let blogData:fakeData[] = fakeData;

    switch (filter) {
        case "popular":
            blogData = blogData.filter((item) => item.category === filter);
            break;

        case "maxVisited":
            blogData = blogData.filter((item) => item.category === filter);
            break;

        case "lowCost":
            blogData = blogData.filter((item) => item.category === filter);
            break;

        case "highLike":
            blogData = blogData.filter((item) => item.category === filter);
            break;

        default:
            blogData =fakeData;
            break;
    }


    return (
        <div className="w-full relative h-dvh py-5 overflow-x-hidden ">
            <div className="relative overflow-hidden">
                <h1 className="font-heading-font text-4xl font-bold">Top Destination</h1>
            </div>
            <Filter/>
            <div className="relative h-[85%] w-full  mt-3 flex flex-col items-center">
                <div className="relative overflow-hidden w-full h-[90%] px-5">
                   <Suspense fallback={<Loader />} key={filter}>
                       <Carousel blogData={blogData}/>
                   </Suspense>
                </div>
                <Link href="/public"
                      className={`text-md font-subHeading-font font-bold px-5 py-2 border-2  rounded-full border-primary-black dark:border-primary-white hover:bg-slate-400  hover:border-0 transition`}>Plan
                    your trip</Link>
            </div>

        </div>
    )
}
export default TopDestination
