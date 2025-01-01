import {z} from "zod";

export const loginSchema = z.object({
    identifier: z.string(),
    password: z.string().min(8, {message: "password must be at least 8 characters"}).trim(),
})

