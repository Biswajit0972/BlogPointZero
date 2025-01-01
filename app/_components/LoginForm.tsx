"use client"

import React from 'react'
import {loginSchema} from "@/app/_utils/zod/ZodTypes";
import {loginUser} from "@/app/_utils/type";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Input from "@/app/_components/form/Input";
import Button from "@/app/_components/Button";
import axios from "axios";
import {useRouter} from "next/navigation";

export const LoginForm = ({className}:{className: string}   ) => {
   const {register, handleSubmit, formState: { errors }} = useForm<loginUser>({
       resolver: zodResolver(loginSchema),
   })

    const router = useRouter();

    const onFormSubmit = async (data: loginUser) => {
        const { identifier,
            password} = data;
      const res =  await axios.post("http://localhost:3000/api/user/user-session", {
         identifier,
          password
      }, {
          withCredentials: true
      });
      if (res.data) {
       router.push("/");
      }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={className}>
            <Input fieldName="identifier" register={register} placeholder="Enter username or email" className="text-sm" errorMessage={errors.identifier} />
            <Input fieldName="password" register={register} placeholder="Enter password" className="text-sm" errorMessage={errors.password} />
            <Button variant="default" type="submit" className="w-1/2 mx-auto">Login</Button>
        </form>
    )
}
