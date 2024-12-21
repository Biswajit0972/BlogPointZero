import {NextRequest, NextResponse} from "next/server";
import {cookieHandler, responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {SubscriptionModel} from "@/app/_lid/modles/subscription.model";

async function handelUnfollow (request: NextRequest): Promise<NextResponse<responseType>> {
    const queryParams = request.nextUrl.searchParams;
    const channerOwnerId = queryParams.get("id");

    const subscriberId = await cookieHandler();

    if (!subscriberId && !channerOwnerId) {
        return NextResponse.json({error: "Token is expired, please login again"})
    }

    const checkUserLoggedIn = await SubscriptionModel.find({followers: subscriberId, following: channerOwnerId});

    if (checkUserLoggedIn.length === 0) {
        return NextResponse.json({error: "user not found"})
    }

   await SubscriptionModel.findOneAndDelete({followers: subscriberId, following: channerOwnerId});

   return NextResponse.json({error: "Good bye user 💀"})
}

export const DELETE = responseHandler(handelUnfollow);