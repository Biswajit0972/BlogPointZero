import {NextRequest, NextResponse} from "next/server";
import { responseHandler} from "@/app/_utils/utils";
import { responseType} from "@/app/_utils/type";
import { ShareModel} from "@/app/_lid/modles/feedback.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";
import {cookieHandler, getAccessToken} from "@/app/_utils/cookiesHelper";

await dbConnection();

async function handleShare(request: NextRequest):Promise<NextResponse<responseType>> {

    const getParams = request.nextUrl.searchParams;

    if (!getParams) {
        return NextResponse.json({error: "No blog post found, please provide an Id"}, {status: 404});
    }

    const blogId = getParams.get("blogId");
    const accessToken = getAccessToken(request);

    if (accessToken === "Unauthorized!") {
        return NextResponse.json({error: "Unauthorized!"}, {status: 400});
    }
    const userId = await cookieHandler(accessToken!);

    if (userId === "unauthorized" || !blogId) {
        return NextResponse.json({error: "please add all details"}, {status: 400});
    }

    const isShared = await ShareModel.create({ blogId, sharedBy: userId});

    if (!isShared) {
        return NextResponse.json({error: "Something went wrong, while shared on blog"})
    }
    return NextResponse.json({data: isShared, message: "user Shared successfully" }, {status:200})
}

export const POST = responseHandler(handleShare)