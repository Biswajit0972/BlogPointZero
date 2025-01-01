import {cookies} from "next/headers";
import jwt from "jsonwebtoken";
import {responseType, verify} from "@/app/_utils/type";
import axios from "axios";
import {NextRequest} from "next/server";

export const cookieHandler = async (accessToken: string): Promise<string> => {
    try {
        if (!accessToken) {
            return "unauthorized";
        }

        const {id} =  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY || "") as verify;

        if (!id) {
            return "unauthorized";
        }

        return id;
    }catch (e) {
        console.log(e)
        return e?.toString() || "unauthorized";
    }
}

export function GetId (val: string): void {
    const {id} =  jwt.verify(val, process.env.ACCESS_TOKEN_SECRET_KEY || "") as verify;
    console.log(id)
}

export const auth = async ()=> {
    const cookiesStore = await cookies();

    const accessToken = cookiesStore.get("accessToken");

    if (!accessToken) {
       return  "Unauthorized!";
    }

    return accessToken.value;
}

type  axiosHandler = {
    url: string,
    method: "get" | "post" | "delete" | "put",
    data?: unknown,
}

export const actionsWrapper = async (value: axiosHandler): Promise<unknown > => {
    try {
        const cookieStore = await cookies(); // Fetch cookies
        const accessToken = cookieStore.get('accessToken')?.value; // Retrieve the specific cookie

        const { url, method, data } = value;

        const response = await axios({
            method,
            url,
            data,
            headers: {
                "set-cookie": `Bearer ${accessToken}`, // Pass cookie as a header if needed
            },
        }) as responseType;

        return response.data? response.data : response.error;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getAccessToken = (req:NextRequest) => {
    const authTokens =  req.headers.get("set-cookie");
    if (!authTokens) {
       return "Unauthorized!";
    }
    return authTokens.split(" ").pop();
}