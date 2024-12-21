import {NextRequest, NextResponse} from "next/server";
import {responseType} from "@/app/_utils/type";
import {responseHandler} from "@/app/_utils/utils";
import {UserModel} from "@/app/_lid/modles/user.model";
import bcrypt from "bcryptjs";
import {dbConnection} from "@/app/_lid/database/dbConnection";

const createNewUser = async (req: NextRequest): Promise<NextResponse<responseType>> => {
    await dbConnection();
    const {username, fullName, password, email} = await req.json()

   if ([username, fullName, password, email].find((item) => item.trim() === "")) {
       throw new Error("Please add all fields");
   }

   const isUserEsist = await  UserModel.findOne({
     $or: [{email}, {username}]
   });

   if (isUserEsist) {
       return NextResponse.json({error: "User already exists" }, {status: 401});
   }

   const hashPassword = await bcrypt.hash(password, 10);


    const newUser = await UserModel.create({fullName,password:hashPassword, email, username});

   if (!newUser) {
       return NextResponse.json({error: "Something went's wrong "}, {status: 500});
   }

   const updateUser = await UserModel.findById(newUser?._id).select(["-password", "-refreshToken"])

    return NextResponse.json({data: updateUser}, {status:  200});
}

export const POST = responseHandler(createNewUser)