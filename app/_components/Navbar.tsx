"use client"
import { useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Logo from "@/app/_components/Logo";
import DarkModeToggler from "@/app/_components/DarkModeToggler";
import Button from "@/app/_components/Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fakeAuth, setFakeAuth] = useState(true);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full z-50 ">
            <header className="px-5 py-2 flex-between ">
                <Logo/>
                <div className="h-full relative  w-[35%] flex-between  overflow-hidden">
                   <DarkModeToggler/>
                    {
                        fakeAuth && <Button variant="transparent" className="relative text-2xl font-subHeading-font p-0" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                           <CiSearch/>
                        </Button>
                    }
                    {
                        fakeAuth? <Button variant="transparent" className="relative text-2xl font-subHeading-font" onClick={() => setIsOpen((e) => !e)}>
                            {
                                isOpen ? <CiMenuFries/> : <CiMenuBurger/>
                            }
                        </Button>  : <Button variant="outline" className="relative text-sm font-subHeading-font">Sign in</Button>
                    }
                </div>
            </header>
            {
                isOpen && <h1>this is your mobile nav</h1>
            }
            {
                isSearchOpen && (<p>Search bar open</p>)
            }
        </div>
    )
}
export default Navbar
