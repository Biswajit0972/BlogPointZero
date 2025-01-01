import {NextRequest, NextResponse} from "next/server";
import { responseHandler} from "@/app/_utils/utils";
import { responseType} from "@/app/_utils/type";
import {FeedbackModel} from "@/app/_lid/modles/feedback.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import {cookieHandler} from "@/app/_utils/cookiesHelper";

await dbConnection();

async function handleLike (request: NextRequest):Promise<NextResponse<responseType>> {

    const getParams = request.nextUrl.searchParams;

    if (!getParams) {
        return NextResponse.json({error: "No blog post found, please provide an Id"}, {status: 404});
    }
    const blogId = getParams.get("blogId");

    const userId = await cookieHandler();

    if (!userId || !blogId) {
        return NextResponse.json({error: "please add all details"}, {status: 400});
    }

    const checkIsUserLiked = await FeedbackModel.find({ blogId, likeBy: userId});

    if (checkIsUserLiked.length !== 0) {
        return NextResponse.json({error: "User Liked already", data: checkIsUserLiked}, {status: 400});
    }

    const isLiked = await FeedbackModel.create({ blogId, likeBy: userId});

    if (!isLiked) {
        return NextResponse.json({error: "Something went wrong, while liked on blog"})
    }

 return NextResponse.json({data: isLiked, message: "user liked successfully" }, {status:200})
}

export const POST = responseHandler(handleLike)