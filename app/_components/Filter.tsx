"use client";

import React from "react";
import { filter } from "@/app/_utils";
import {useSearchParams, useRouter, usePathname} from "next/navigation";


const Filter = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleOnSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const params = new URLSearchParams(searchParams);
        params.set("category", event.currentTarget.value);
        router.replace(`${pathName}?${params.toString()}`, {scroll: false});
    };

    return (
        <div className="mt-2 w-full relative">
            <select onChange={handleOnSelect} className="w-full">
                {filter.map((item, i) => (
                    <option key={i} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
