"use client"

import Button from "@/app/_components/Button";
import React, {useEffect, useState} from "react";
import {handelFollow} from "@/app/actions/action";
import {cookieHandler} from "@/app/_utils/cookiesHelper";

const FollowButton = ({isSubscribed, id}: {isSubscribed: boolean, id: string}) => {
    const [subscribe, setSubscribe] = useState(isSubscribed);

    const handelUserFollow = async  () => {
      try {
        await handelFollow(id)
      }catch (e) {
          console.log(e)
      }

    }

    const handelUserUnFollow = async  () => {

    }

    return (
       <>
           {
               !subscribe ? <Button className="h-full w-full relative" variant="outline" onClick={handelUserFollow}>
                  follow
               </Button> : <Button className="h-full w-full relative" variant="outline" onClick={handelUserUnFollow}>
                   following
               </Button>
           }
       </>
    )
}
export default FollowButton
