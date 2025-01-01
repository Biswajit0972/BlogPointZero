import {NextRequest, NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import { responseHandler} from "@/app/_utils/utils";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import mongoose from "mongoose";
import {cookieHandler, getAccessToken} from "@/app/_utils/cookiesHelper";

await dbConnection()
async function getBlogById (request: NextRequest):Promise<NextResponse<responseType>>{
    const paramsData = request.nextUrl.searchParams;
    const accessToken = getAccessToken(request);

    if (accessToken === "Unauthorized!") {
        return NextResponse.json({error: "Unauthorized!"}, {status: 400});
    }

    if (!paramsData) {
        return NextResponse.json({error: "No blog id found"}, {status:404});
    }
    const blogId = paramsData.get("blogId");

    const userId =await cookieHandler(accessToken!);

    if (userId === "unauthorized") {
        return NextResponse.json({error: "cookie is expired"}, {status: 400});
    }

    const blog = await BlogModel.aggregate([
        {
            $match: {
                "_id": new mongoose.Types.ObjectId(blogId || "")
            }
        },
        {
            $lookup: {
                from: "feedbacks",
                localField: "_id",
                foreignField: "blogId",
                as: "likes"
            }
        }, {
            $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "blogId",
                as: "comments"
            }
        },
        {
            $lookup: {
                from: "shares",
                localField: "_id",
                foreignField: "blogId",
                as: "shares"
            }
        },
        {
            $addFields: {
                "likeCount": {
                    $size: "$likes"
                },
                "commentCount": {
                    $size: "$comments"
                },
                "shareCount": {
                    $size: "$shares"
                },
                "isLiked": {
                    $cond: {
                        if: {
                            $in: [new mongoose.Types.ObjectId(userId), "$likes.likeBy"]
                        },
                        then: true,
                        else: false,
                    }
                },
                "isCommnet": {
                    $cond: {
                        if: {
                            $in: [new mongoose.Types.ObjectId(userId), "$comments.userId"]
                        },
                        then: true,
                        else: false,
                    }
                }
            }
        },
        {
            $project: {
                _id: 1,
                coverImage: 1,
                title: 1,
                content: 1,
                images: 1,
                tag:1,
                isPublished: 1,
                createdAt: 1,
                updatedAt: 1,
                owner: 1,
                comments: 1,
                likeCount: 1,
                shareCount:1,
                commentCount: 1
            }
        }
    ]);

    if (!blog) {
        return NextResponse.json({error: "No blog found with id " + paramsData.get("id")}, {status: 404})
    }

    return NextResponse.json({data: blog}, {status: 200});
}

export const GET = responseHandler(getBlogById);