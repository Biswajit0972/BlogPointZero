import {NextRequest, NextResponse} from "next/server";
import { responseHandler} from "@/app/_utils/utils";
import { responseType} from "@/app/_utils/type";
import {CommentModel} from "@/app/_lid/modles/feedback.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import {cookieHandler} from "@/app/_utils/cookiesHelper";

await dbConnection();

async function handelComment(request: NextRequest): Promise<NextResponse<responseType>> {
    const getParams = request.nextUrl.searchParams;

    if (!getParams) {
        return NextResponse.json({error: "No blog post found, please provide an Id"}, {status: 404});
    }

    const blogId = getParams.get("blogId");

    const userId = await cookieHandler();

    const {content} = await request.json();

    if (!content || !blogId || !userId) {
        return NextResponse.json({error: "please add all details"}, {status: 400});
    }


    const messageResponse = await CommentModel.create({blogId, userId,  content});

    if (!messageResponse) {
        return NextResponse.json({error: "Something went wrong, while commenting on blog"})
    }

    return NextResponse.json({data: messageResponse, message: "user liked successfully" }, {status:200})
}

export const POST = responseHandler(handelComment);