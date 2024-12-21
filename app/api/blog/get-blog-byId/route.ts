import {NextRequest, NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import {responseHandler} from "@/app/_utils/utils";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {dbConnection} from "@/app/_lid/database/dbConnection";

await dbConnection()
async function getBlogById (request: NextRequest):Promise<NextResponse<responseType>>{
    const paramsData = request.nextUrl.searchParams;

    if (!paramsData) {
        return NextResponse.json({error: "No blog id found"}, {status:404});
    }
     const blogID = paramsData.get("id");
    const blog = await BlogModel.findById(blogID);

    if (!blog) {
        return NextResponse.json({error: "No blog found with id " + paramsData.get("id")}, {status: 404})
    }
    return NextResponse.json({data: blog}, {status: 200});
}

export const GET = responseHandler(getBlogById);