"use client";

import React from "react";
import { filter } from "@/app/_utils";
import {useSearchParams, useRouter, usePathname} from "next/navigation";


const Filter = ({}) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {

        const params = new URLSearchParams(searchParams);
        const selectedCategory = event.currentTarget.value;

        if (!selectedCategory) {
            router.replace(pathName, { scroll: false });
        } else {
            params.set("category", selectedCategory);
            router.replace(`${pathName}?${params.toString()}`, { scroll: false });
        }
    };

    return (
        <div className="mt-2 w-full relative flex justify-start">
            <div className="relative font-content-font text-sm font-[200]">
                <select onChange={handleOnSelect} className="w-full bg-transparent ">
                    <option value="">Select an option</option>
                    {filter.map((item, i) => (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
