"use server"

import { auth } from '@clerk/nextjs/server'

export const getCurrentUser = async ():Promise<void> => {
   const {userId} = await auth();
    console.log(userId)

}