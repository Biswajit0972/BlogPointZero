import {NextRequest, NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {responseHandler} from "@/app/_utils/utils";
import {cookieHandler, getAccessToken} from "@/app/_utils/cookiesHelper";

async function delteBlogPost(request: NextRequest):Promise<NextResponse<responseType>> {
  const accessToken = getAccessToken(request);

  if (accessToken === "Unauthorized!") {
    return NextResponse.json({error: "Unauthorized!"}, {status: 400});
  }

  const ownerId = await cookieHandler(accessToken!);

  if (ownerId === "unauthorized") {
    return NextResponse.json({error: "please login first "}, {status: 401})
  }

  const getParams = request.nextUrl.searchParams;

  if (!getParams) {
      return NextResponse.json({error: "No blog post found, please provide an Id"}, {status: 404});
  }

  const blogId = getParams.get("id");

  await BlogModel.findByIdAndDelete(blogId);

  return NextResponse.json({data: "blog deleted successfully."}, {status: 201});
}

export const DELETE = responseHandler(delteBlogPost);