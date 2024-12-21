"use client"

import { useState} from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Logo from "@/app/_components/Logo";
import DarkModeToggler from "@/app/_components/DarkModeToggler";
import Button, {buttonStyles} from "@/app/_components/Button";
import {useAuth, UserButton} from '@clerk/nextjs'
import Link from "next/link";
import MobileNav from "@/app/_components/MobileNav";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const {isSignedIn} =  useAuth();


    return (
        <div className="absolute top-0 left-0 w-full z-50 ">
            <header className="px-5 py-2 flex-between ">
                <Logo/>
                <div className="h-full relative  w-[35%] flex-between  overflow-hidden">
                   <DarkModeToggler/>
                    {
                        isSignedIn &&  <UserButton/>
                    }
                    {
                        isSignedIn? <Button variant="transparent" className="relative text-2xl font-subHeading-font" onClick={() => setIsOpen((e) => !e)}>
                            {
                                isOpen ? <CiMenuFries/> : <CiMenuBurger/>
                            }
                        </Button>  : <Link href="/user/sign-in" className={`${buttonStyles} relative text-sm font-subHeading-font`}>sign in</Link>
                    }
                </div>
            </header>
            {
                isOpen && <MobileNav/>
            }
            {
                isSearchOpen && (<p>Search bar open</p>)
            }
        </div>
    )
}
export default Navbar
