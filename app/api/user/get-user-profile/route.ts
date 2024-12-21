import {NextRequest, NextResponse} from "next/server";
import {cookieHandler, responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {UserModel} from "@/app/_lid/modles/user.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import mongoose from "mongoose";

await dbConnection();

async function getUserProfile(request: NextRequest):Promise<NextResponse<responseType>> {
    const queryParams = request.nextUrl.searchParams;
    const id = queryParams.get("id");
    const ownerId = await cookieHandler();

  if (!id) {
      return NextResponse.json({error: "Token is expired, please login again "})
  }

    const user = await UserModel.aggregate([
     {
         $match: {
             "_id": new mongoose.Types.ObjectId(id)
         }
     },
     {
         $lookup: {
             from: "blogs",
             localField: "_id",
             foreignField: "authorId",
             as: "blogPosts"
         }
     },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "following",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "followers",
                as: "subscribe"
            }
        },
        {
            $addFields: {
                "subscriberCount": {$size: "$subscribers"},
                "subscribeCount": {$size: "$subscribe"},
                "isSubscribed": {
                    $cond: {
                        if: {$in: [ new mongoose.Types.ObjectId(ownerId), "$subscribers.followers"]},
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                _id: 1,
                name: 1,
                username: 1,
                fullName: 1,
                createdAt: 1,
                updatedAt: 1,
                blogPosts: 1,
                subscriberCount: 1,
                subscribeCount: 1,
                isSubscribed: 1
            }
        }
 ]);

    return NextResponse.json({data: user[0]}, {status: 200})
}


export const GET = responseHandler(getUserProfile);
