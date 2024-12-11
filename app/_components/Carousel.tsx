"use client"
import {useState, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import sea from  "@/app/_asset/sea.jpg";
import forest from  "@/app/_asset/pain.jpg";
import desert from  "@/app/_asset/savana.jpg";
import Card from "@/app/_components/Card";
import {StaticImageData} from "next/image";

// Existing fake data array
type fakeData = {
    image: StaticImageData;
    heading: string;
    location: string;
    category: string;
}

const fakeData:fakeData[] = [
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
        category: "max visited"
    },
    {
        image: desert,
        heading: "Exploring the Vibrant Streets of Tokyo",
        location: "Tokyo, Japan",
        category: "high like"
    },
    {
        image: sea,
        heading: "A Journey Through the Sahara Desert",
        location: "Morocco",
        category: "low cost"
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
        category: "max visited"
    },
    {
        image: sea,
        heading: "Discover the Wild Beauty of the Amazon",
        location: "Amazon Rainforest, Brazil",
        category: "high like"
    },
    {
        image: forest,
        heading: "Magical Winter Destinations to Visit",
        location: "Lapland, Finland",
        category: "low cost"
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
        category: "high like"
    },
    { image: sea, heading: "Relax at the Blue Lagoon", location: "Iceland", category: "popular" },
    { image: forest, heading: "Explore the Black Forest", location: "Germany", category: "max visited" },
    { image: desert, heading: "The Mysteries of Machu Picchu", location: "Peru", category: "high like" },
    { image: sea, heading: "Enjoy the Sunshine in the Bahamas", location: "Bahamas", category: "low cost" },
    { image: forest, heading: "Wander the Redwood Forest", location: "California, USA", category: "popular" },
    { image: desert, heading: "Discover the Ancient City of Petra", location: "Jordan", category: "max visited" },
    { image: sea, heading: "Sail Through the Norwegian Fjords", location: "Norway", category: "high like" },
    { image: forest, heading: "Admire the Cherry Blossoms", location: "Kyoto, Japan", category: "low cost" },
    { image: sea, heading: "Snorkeling in the Maldives", location: "Maldives", category: "popular" },
    { image: desert, heading: "Stargazing in the Atacama Desert", location: "Chile", category: "high like" }
];


const Carousel = () => {
    const [mounted, setMounted] = useState(false);
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    useEffect(() => {

        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="embla overflow-hidden mt-3 h-[94%] w-full relative" ref={emblaRef}>
            <div className="embla__container min-w-full h-full relative gap-2 px-5 ">
                {
                    fakeData.map((item, index) => (<div key={index} className="embla__slide relative cursor-pointer">
                      <Card className="h-full relative w-full border-2 rounded-md" data={item}></Card>
                    </div>))
                }
            </div>

        </div>
    )
}
export default Carousel
