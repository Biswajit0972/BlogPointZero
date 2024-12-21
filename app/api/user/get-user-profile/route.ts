import { NextResponse} from "next/server";
import {responseHandler} from "@/app/_utils/utils";
import {responseType, verify} from "@/app/_utils/type";
import {UserModel} from "@/app/_lid/modles/user.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import mongoose from "mongoose";
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

await dbConnection();


async function getUserProfile():Promise<NextResponse<responseType>> {

 const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")
  if (!accessToken) {
      return NextResponse.json({error: "unauthorized access"}, {status: 401})
  }

  const {id} =  jwt.verify(accessToken.value, process.env.ACCESS_TOKEN_SECRET_KEY || "") as verify;

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
        $project: {
            _id: 1,
            name: 1,
            createdAt: 1,
            updatedAt: 1,
            blogPosts: 1,
        }
     }
 ]);

    return NextResponse.json({data: user}, {status: 200})
}


export const GET = responseHandler(getUserProfile);
