"use client"
import React, {FC, ReactNode} from "react";
import {VariantProps, cva} from "class-variance-authority"
import {cn} from "@/app/_utils/utils"
import Image, {StaticImageData} from "next/image";

const cardStyles = cva(
    "p-3 h-full w-full relative gap-3 items-center p-3 bg-primary-white dark:bg-primary-black",
    {
        variants: {
            variant: {
                default: "flex flex-col ",
                row: "flex  flex-row "
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardStyles> {
    children?: ReactNode;
    className?: string;
    data: {heading: string, location:string, image:StaticImageData};
}

const Card: FC<CardProps> = ({data, className, variant, ...props}) => {
    return (
        <div className={cn(cardStyles({variant}), className)} {...props}>
            <div className="image-box h-[85%] w-full relative overflow-hidden rounded-lg">
                <Image src={data.image} alt="card image" fill />
            </div>
            <div className="w-full pt-1">
                <h3 className="font-subHeading-font font-bold text-lg">{data.heading}</h3>
                <p className="font-heading-font text-sm font-semibold">location: <span className="font-content-font">{data.location}</span></p>
            </div>
        </div>
    )
}
export default Card
