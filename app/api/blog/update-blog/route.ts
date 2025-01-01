import {NextRequest, NextResponse} from "next/server";
import {blogModel, responseType} from "@/app/_utils/type";
import {responseHandler} from "@/app/_utils/utils";
import {BlogModel} from "@/app/_lid/modles/blog.model";

async function updateBlogById (request: NextRequest) : Promise<NextResponse<responseType>> {

    const queryParams = request.nextUrl.searchParams;
    const blogId = queryParams.get("blogId");
    const {coverImage, content, images, tag, owner, title, isPublished} = await request.json() as blogModel;

    if (!blogId) {
        return NextResponse.json({error: "Please fill all the required fields"}, {status: 400})
    }

    const updateBlog = await BlogModel.findByIdAndUpdate(blogId, {coverImage, content, images, tag, owner, title, isPublished});

    if (!updateBlog) {
        return NextResponse.json({error: "Please add a valid post Id"}, {status: 400})
    }

    return NextResponse.json({data: updateBlog}, {status: 200});
}

export const PATCH = responseHandler(updateBlogById);