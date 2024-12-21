import { NextResponse} from "next/server";
import {cookieHandler, responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {UserModel} from "@/app/_lid/modles/user.model";

async function deleteUser ():Promise<NextResponse<responseType>> {
   const id = await cookieHandler();

   if (!id) {
     return NextResponse.json({error: "Token is expired, please login again, before delete user account"});
   }

  const res = await UserModel.findByIdAndDelete(id);

   if (!res) {
       return NextResponse.json({error: "User not found, token expired or modified"})
   }

   return NextResponse.json({data: "User deleted successfully"});
}

export const DELETE = responseHandler(deleteUser);