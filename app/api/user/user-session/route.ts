import {dbConnection} from "@/app/_lid/database/dbConnection";
import {NextRequest, NextResponse} from "next/server";
import {responseType, userModel} from "@/app/_utils/type";
import {responseHandler} from "@/app/_utils/utils";
import {UserModel} from "@/app/_lid/modles/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

await dbConnection();

interface reqType {
    identifier: string;
    password: string;
}

async function createUserSession (request: NextRequest): Promise<NextResponse<responseType>> {
 const {identifier, password} = (await request.json()) as reqType;

 const isUserFound = await UserModel.findOne({
     $or: [{email: identifier}, {username: identifier}]
 }) as userModel;

 if (!isUserFound) {
     return NextResponse.json({error: "Please, create an account before login"}, {status: 401});
 }

 const comparePassword = await bcrypt.compare(password, isUserFound.password);

 if (!comparePassword) {
     return NextResponse.json({error: "Invalid credentials"}, {status: 401});
 }
 
 const accessToken =  jwt.sign({id: isUserFound._id, email: isUserFound.email}, process.env.ACCESS_TOKEN_SECRET_KEY || "", {expiresIn: process.env.ACCESS_TOKEN_EXPIRY});
 
 const refreshToken =  jwt.sign({id: isUserFound._id}, process.env.REFRESH_TOKEN_SECRET_KEY  || "", {expiresIn: process.env.REFRESH_TOKEN_EXPIRY});

  isUserFound.refreshToken = refreshToken;
  await isUserFound.save({validateBeforeSave: false});

 const response = NextResponse.json({message: "user logged in"}, {status: 200});
 response.cookies.set("accessToken", accessToken, {httpOnly: true, secure: false, sameSite: "strict" });
 response.cookies.set("refreshToken", refreshToken, {httpOnly: true, secure: false, sameSite: "strict"});

 return response;
}

export const POST = responseHandler(createUserSession);