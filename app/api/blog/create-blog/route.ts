import {NextRequest, NextResponse} from "next/server";
import {blogModel, responseType} from "@/app/_utils/type";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {responseHandler} from "@/app/_utils/utils";

async function createBlog (request: NextRequest): Promise<NextResponse<responseType>> {
  const {coverImage, content, images, tag, owner, title, isPublished} = await request.json() as blogModel;

  if ([coverImage, content, title].find((item) => item.trim() === "")) {
      return NextResponse.json({error: "please provide a valid information"}, {status: 404});

  }

  if (tag.length == 0 || tag.length == 1) {
   return NextResponse.json({error: "please provide at least two tags."}, {status: 404});
  }

  if (!owner) {
      return NextResponse.json({error: "please provide a owner "}, {status: 401})
  }

  const newBlog = await BlogModel.create({coverImage, content, images, tag, owner, title, isPublished});

  if (!newBlog) {
      return NextResponse.json({
          error: "Something went wrong, please try again",
      }, {status: 403});
  }

  return NextResponse.json({data: newBlog}, {status: 201});
}

export const POST = responseHandler(createBlog);
