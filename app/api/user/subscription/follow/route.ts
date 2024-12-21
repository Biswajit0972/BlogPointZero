import {NextRequest, NextResponse} from "next/server";
import {cookieHandler, responseHandler} from "@/app/_utils/utils";
import {responseType} from "@/app/_utils/type";
import {SubscriptionModel} from "@/app/_lid/modles/subscription.model";

async function followHandler (request: NextRequest): Promise<NextResponse<responseType>> {
    const channel =  request.nextUrl.searchParams;
    const channerOwnerId = channel.get("id");

    const subscriberId = await cookieHandler();
    
    if (!subscriberId || !channerOwnerId) {
        return NextResponse.json({error: "No subscriber and owner found."}, {status: 404});
    }

    const subscriberAllreadySubscribed = await SubscriptionModel.find({followers: subscriberId, following: channerOwnerId});

    if (subscriberAllreadySubscribed.length !== 0) {
        return NextResponse.json({error: "user already subscribed!"}, {status: 401})
    }

    const response = await SubscriptionModel.create({followers: subscriberId, following: channerOwnerId});

    if (!response._id) {
        return NextResponse.json({error: "something wents wrong, while subscribing channel"})
    }

    return NextResponse.json({data: `Thank you for subscribing our channel`}, {status: 201})
}

export  const POST = responseHandler(followHandler)