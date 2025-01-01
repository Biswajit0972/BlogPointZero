import React from 'react'
import {getUserProfileById} from "@/app/actions/action";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import userImage from  "@/app/_asset/savana.jpg"
import {UserData} from "@/app/_utils/type";
import FollowButton from "@/app/_components/FollowButton";

const Page = async ({searchParams}: {searchParams: Promise<{id: string}>}) => {
    const getSearch = await searchParams;
    const id =  getSearch.id;
    const {fullName, username,subscribeCount, subscriberCount ,isSubscribed} = await getUserProfileById(id)  as UserData;

    return (
        <div className="h-dvh w-full relative  overflow-x-hidden pt-12 pb-2">
            <div className="h-full w-full flex flex-col items-center ">
                <div className="profile w-full relative flex flex-col items-center gap-2">
                    <div className="h-[22dvh] w-full flex  items-center py-1 gap-5 bg-blue-400">
                        <div className="profile-picture relative h-full">
                            <div className="h-32 w-32 relative bg-red-50 rounded-full overflow-hidden">
                                <Image src={userImage} alt="user-profile-image" fill className="h-full w-full object-cover"/>
                            </div>
                        </div>
                        <div className="user-details relative h-full w-[calc(100%-8rem)] bg-red">
                            <div className="relative w-full overflow-hidden flex flex-col gap-2 ">
                                <h1 className="font-heading-font font-extrabold text-2xl">{fullName}</h1>
                                <div className="relative w-full overflow-hidden flex items-centere font-subHeading-font font-bold gap-2">
                                    <h2 className="text-xl">{username}</h2>
                                    <div className="relative h-full  overflow-hidden flex items-center  justify-center cursor-pointer">
                                       < FaRegCopy/>
                                    </div>
                                </div>
                                <div className="w-full relative overflow-hidden flex items-center justify-between gap-5">
                                    <div className="relative w-1/2 text-lg capitalize">
                                        <p className="text-lg">followers</p>
                                        {subscriberCount}
                                    </div>
                                    <div className="relative">
                                        <p className="text-lg">following</p>
                                        {subscribeCount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-12">
                        <FollowButton isSubscribed={isSubscribed} id={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
