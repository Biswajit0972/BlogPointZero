import mongoose, { Schema } from "mongoose";
import { userModel } from "@/app/_utils/type";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema<userModel>(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            maxlength: [20, "Username is too long"],
            lowercase: true,
        },
        fullName: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            trim: true,
            minlength: [6, "Password is too short"],
        },
        verificationCode: {
            type: Number,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        refreshToken: {
            type: String,
        },
        watchBlogs: [
            {
                type: Schema.Types.ObjectId,
                ref: "Blog",
            },
        ],
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(aggregatePaginate);

export const UserModel =
    (mongoose.models.User as mongoose.Model<userModel>) ||
    mongoose.model<userModel>("User", userSchema);
