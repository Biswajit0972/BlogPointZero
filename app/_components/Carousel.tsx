"use client"

import {useState, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Card from "@/app/_components/Card";
import {StaticImageData} from "next/image";

// Existing fake data array
type fakeData = {
    image: StaticImageData;
    heading: string;
    location: string;
    category: string;
}


const Carousel = ({blogData}: {blogData?: fakeData[]} ) => {

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
                    blogData!.map((item, index) => (<div key={index} className="embla__slide relative cursor-pointer">
                      <Card className="h-full relative w-full border-2 rounded-md" data={item}></Card>
                    </div>))
                }
            </div>

        </div>
    )
}
export default Carousel
