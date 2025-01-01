import {NextRequest, NextResponse} from "next/server";
import {responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {UserModel} from "@/app/_lid/modles/user.model";
import {cookieHandler, getAccessToken} from "@/app/_utils/cookiesHelper";

async function deleteUser (req: NextRequest):Promise<NextResponse<responseType>> {
    const accessToken = getAccessToken(req);
    if (accessToken === "Unauthorized!") {
       return NextResponse.json({error: "Unauthorized!"}, {status: 400});
    }

   const id = await cookieHandler(accessToken!);

   if (!id) {
     return NextResponse.json({error: "Token is expired, please sign-in again, before delete user account"});
   }

  const res = await UserModel.findByIdAndDelete(id);

   if (!res) {
       return NextResponse.json({error: "User not found, token expired or modified"})
   }

   return NextResponse.json({data: "User deleted successfully"});
}

export const DELETE = responseHandler(deleteUser);