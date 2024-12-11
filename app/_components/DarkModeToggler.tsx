import {useState, useEffect} from 'react'
import {useTheme} from "next-themes";
import { CiSun } from "react-icons/ci";
import { BsFillMoonStarsFill } from "react-icons/bs";

import Button from "@/app/_components/Button";

const DarkModeToggler = () => {
    const [mounted, setMounted] =useState(false);
    const {setTheme, resolvedTheme} = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (resolvedTheme === "dark") {
        return (
            <Button variant="transparent" className="font-bold text-2xl py-1 text-yellow-300" onClick={() => setTheme("light")}>
                <BsFillMoonStarsFill />
            </Button>
        )
    }

    if (resolvedTheme === "light"){
        return (
            <Button variant="transparent" className="font-bold text-2xl py-1 text-yellow-500 " onClick={() => setTheme("dark")}>
                <CiSun />
            </Button>
        )
    }
}
export default DarkModeToggler
