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
    blogId: mongoose.Schema.Types.ObjectId | string;
    likeBy: mongoose.Schema.Types.ObjectId | string;
}

export interface shareModel extends Document {
    blogId: mongoose.Schema.Types.ObjectId;
    sharedBy: mongoose.Schema.Types.ObjectId;
    platform: string; // e.g., Twitter, Facebook
}

export interface commentModel extends Document {
    blogId: mongoose.Schema.Types.ObjectId;
    content: string;
    userId: mongoose.Schema.Types.ObjectId;
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

export interface userRegister {
    fullName?: string;
    username?: string;
    email?: string;
    password?: string;
}

export interface loginUser {
    identifier: string;
    password: string;
}

type BlogPost = {
    _id: string;
    coverImage: string;
    title: string;
    content: string;
    tag: string[];
    owner: string;
    isPublished: boolean;
    images: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export  type UserData = {
    _id: string;
    username: string;
    fullName: string;
    createdAt: string;
    updatedAt: string;
    blogPosts: BlogPost[];
    subscriberCount: number;
    subscribeCount: number;
    isSubscribed: boolean;
};

