import {twMerge} from "tailwind-merge";
import {ClassValue, clsx} from "clsx";
import {NextRequest, NextResponse} from "next/server";
import axios from "axios";

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

