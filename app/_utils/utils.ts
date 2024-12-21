import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import {verify} from "@/app/_utils/type";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface AppError extends Error {
    status?: number;
}

export const responseHandler = (fn: (req: NextRequest)  => Promise<unknown | never>) => {
    try {
        return async (req: NextRequest) => {
            return await fn(req);
        }
    }catch (e:unknown) {
        const error = e as AppError;
        console.log("Error: " + e);
        return NextResponse.json({error: error?.message || "something went wrong"}, {status: error?.status || 500});
    }
}

export const cookieHandler = async (): Promise<string | never> => {
    try {
        const cookieBank = await cookies();
        const accessToken = cookieBank.get("accessToken");

        if (!accessToken) {
            throw new Error("Unauthorized!");
        }

        const {id} =  jwt.verify(accessToken.value, process.env.ACCESS_TOKEN_SECRET_KEY || "") as verify;

        if (!id) {
            throw new Error("Unauthorized!");
        }

     return id;
    }catch (e) {
        console.log(e)
        throw new Error("Cookie not found");
    }
}
