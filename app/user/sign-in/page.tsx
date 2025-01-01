import React from 'react'
import {LoginForm} from "@/app/_components/LoginForm";



const Page = () => {
    return (
        <div className="w-full h-dvh relative flex items-center justify-center ">
           <div className="relative w-full  p-2 text-center">
              <div className="overflow-hidden relative">
                    <h1 className="font-heading-font font-semibold text-rose-500 capitalize">Welcome to the local vlog</h1>
              </div>
               <div className="relative w-full flex flex-col gap-3">
                    <LoginForm className="flex flex-col gap-3"/>
               </div>
           </div>
        </div>
    )
}
export default Page
