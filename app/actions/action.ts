"use server"

import axios from "axios"

import { UserData} from "@/app/_utils/type";
import {actionsWrapper, cookieHandler} from "@/app/_utils/cookiesHelper";

export const getUserProfileById = async (id: string): Promise<UserData | unknown> => {
    try {
        const response = await axios.get(`http://localhost:3000/api/user/get-user-profile?id=${id}`);
        return response.data.data!;
    }catch (e) {
        console.error(e);
    }
}

export const handelFollow = async (id: string) => {

    const response = await actionsWrapper(
        {
            url: `http://localhost:3000/api/user/subscription/follow?id=${id}`,
            method: "post",
        }
    );

}

export const getCookies = async () => {
    console.table(await cookieHandler("sghdfghdfghagg"));
}