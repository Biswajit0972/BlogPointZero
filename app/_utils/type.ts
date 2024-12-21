import  mongoose, {Document} from 'mongoose'
export type dbConnect = {
    isConnected: number;
}

export interface userModel extends Document {
    fullName: string;
    username: string;
    email: string;
    password: string;
    verificationCode: number;
    isVerified: boolean;
    refreshToken?: string;
    watchBlogs?: Array<mongoose.Schema.Types.ObjectId>[]
}

export interface blogModel extends Document {
    coverImage: string
    title: string,
    content: string,
    tag: Array<string>,
    owner: mongoose.Schema.Types.ObjectId;
    isPublished: boolean,
    images?: Array<string>,
}

export interface feedBackModel extends Document {
    blogId: mongoose.Schema.Types.ObjectId;
    likeBy: mongoose.Schema.Types.ObjectId;
    comment: mongoose.Schema.Types.ObjectId;
    share: mongoose.Schema.Types.ObjectId;
}

export interface shareModel extends Document {
    blogId: mongoose.Schema.Types.ObjectId;
    sharedBy: mongoose.Schema.Types.ObjectId;
    platform: string; // e.g., Twitter, Facebook
}

export interface commentModel extends Document {
    blogId: mongoose.Schema.Types.ObjectId;
    content: string;
}

export interface responseType {
    data?: string | unknown;
    message?: string;
    error?: string;
}

export interface verify {
    id: string;
    email: string;
    iat: number;
    exp: number;
}