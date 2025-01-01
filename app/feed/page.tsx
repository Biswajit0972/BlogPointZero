"use client"
import Button from "@/app/_components/Button";
import {getCookies, handelFollow} from "@/app/actions/action";


  function Feed () {

    return (
        <div className="h-screen pt-12 w-full flex flex-col items-center justify-center gap-2">
           <Button onClick={async() => {
               console.log( await getCookies())

           }}>Checking cookie</Button>
        </div>
    )
}

export default Feed;