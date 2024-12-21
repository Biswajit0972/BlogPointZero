import mongoose, {Schema} from "mongoose";
import {commentModel, feedBackModel, shareModel} from "@/app/_utils/type";

const commentSchema = new Schema<commentModel>(
    {
        blogId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const shareSchema = new Schema<shareModel>(
    {
        blogId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        sharedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        platform: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const feedBackSchema = new Schema<feedBackModel>({
blogId: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
},
    likeBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
    },
    share: {
        type: Schema.Types.ObjectId,
        ref: "Share",
    }
}, {
timestamps: true
})

export const FeedbackModel = mongoose.models.Feedback as mongoose.Model<feedBackModel> || mongoose.model<feedBackModel>("Feedback", feedBackSchema);
export const CommentModel = mongoose.models.Feedback as mongoose.Model<commentModel> || mongoose.model<commentModel>("Comment", commentSchema);
export const ShareModel = mongoose.models.Feedback as mongoose.Model<shareModel> || mongoose.model<shareModel>("Share", shareSchema);