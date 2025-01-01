import {NextRequest, NextResponse} from "next/server";
import { responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {cookieHandler} from "@/app/_utils/cookiesHelper";
import {SubscriptionModel} from "@/app/_lid/modles/subscription.model";


async function followHandler (request: NextRequest): Promise<NextResponse<responseType>> {
    const authTokens =  request.headers.get("set-cookie");
    if (!authTokens) {
        return NextResponse.json({error: "unauthorized"}, {status: 400});
    }
    const accessToken = authTokens.split(" ").pop()


    const channel =  request.nextUrl.searchParams;
    const channerOwnerId = channel.get("id");

    const subscriberId = await cookieHandler(accessToken!);

    if (!subscriberId || !channerOwnerId) {
        return NextResponse.json({error: "No subscriber and owner found."}, {status: 404});
    }

    const subscriberAllreadySubscribed = await SubscriptionModel.find({followers: subscriberId, following: channerOwnerId});

    if (subscriberAllreadySubscribed.length !== 0) {
        return NextResponse.json({data: "user already subscribed!"}, {status: 401})
    }

    const response = await SubscriptionModel.create({followers: subscriberId, following: channerOwnerId});

    if (!response._id) {
        return NextResponse.json({error: "something went's wrong, while subscribing channel"})
    }

    return NextResponse.json({data: `Thank you for subscribing our channel`}, {status: 201})
}

export  const POST = responseHandler(followHandler)