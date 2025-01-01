import {NextRequest, NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {responseHandler} from "@/app/_utils/utils";

async function delteBlogPost(requesst: NextRequest):Promise<NextResponse<responseType>> {

  const getParams = requesst.nextUrl.searchParams;
  if (!getParams) {
      return NextResponse.json({error: "No blog post found, please provide an Id"}, {status: 404});
  }

  const blogId = getParams.get("id");

  await BlogModel.findByIdAndDelete(blogId);

  return NextResponse.json({data: "blog deleted successfully."}, {status: 201});
}

export const DELETE = responseHandler(delteBlogPost);