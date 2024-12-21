import {NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import {BlogModel} from "@/app/_lid/modles/blog.model";
import {responseHandler} from "@/app/_utils/utils";
import {dbConnection} from "@/app/_lid/database/dbConnection";

await dbConnection();

async function getAllBlogs(): Promise<NextResponse<responseType>> {
  const allBlogs = await BlogModel.aggregate([
      {
         $sort: { createdAt: 1 },
      },
      {
          $facet: {
              data: [
                  {
                      $skip: 2,
                  },
                  {
                      $limit: 4,
                  }
              ],

          }
      },
      {
          $project: {
              data: 1,
          }
      }
  ])

 return NextResponse.json({data: allBlogs}, {status: 200});
}

export const GET = responseHandler(getAllBlogs);