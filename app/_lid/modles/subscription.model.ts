import mongoose, {Schema} from "mongoose"


const subscriptionSchema = new Schema({
    followers: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    following: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true})

export const SubscriptionModel = mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema);