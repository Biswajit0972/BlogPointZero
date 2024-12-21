import mongoose, {Schema} from "mongoose"
import {blogModel} from "@/app/_utils/type";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";
const blogSchema = new Schema<blogModel>({
    coverImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        maxLength: [100, "title must be less than 100"],
    },
    content: {
        type: String,
        required: true,
    },
    tag:[ {
        type: String,
        required: true,
    }],
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    isPublished: {
        type: Boolean,
        default: false,

    },
    images: [ {
    type: String,
    }],
}, {
    timestamps: true
})

blogSchema.plugin(aggregatePaginate);

export const BlogModel= mongoose.models.blogs as mongoose.Model<blogModel> || mongoose.model<blogModel>("blogs", blogSchema);