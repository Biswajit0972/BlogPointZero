import mongoose, {Schema} from "mongoose";
import {commentModel, feedBackModel, shareModel} from "@/app/_utils/type";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema<commentModel>(
    {
        blogId: {
            type: Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        userId: {
            type:Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }
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
    required: true
  },
        likeBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
     }
}, {
 timestamps: true
}
)

feedBackSchema.plugin(aggregatePaginate);
commentSchema.plugin(aggregatePaginate);
shareSchema.plugin(aggregatePaginate);

export const FeedbackModel = mongoose.models.Feedback as mongoose.Model<feedBackModel> || mongoose.model<feedBackModel>("Feedback", feedBackSchema);
export const CommentModel = mongoose.models.Comment as mongoose.Model<commentModel> || mongoose.model<commentModel>("Comment", commentSchema);
export const ShareModel = mongoose.models.Share as mongoose.Model<shareModel> || mongoose.model<shareModel>("Share", shareSchema);