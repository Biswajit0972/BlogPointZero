import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/_utils/utils";
import { FieldError, UseFormRegister } from "react-hook-form";

const inputStyles = cva(
    "w-full relative text-lg pl-3 cursor-pointer", {
        variants: {
            variant: {
                default: "h-10 text-lg font-heading-font rounded-md",
                extra: "h-8 border-2 outline-0 bg-transparent rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputStyles> {
    className?: string;
    fieldName: string;
    register: UseFormRegister<any>; // Updated to use react-hook-form's `UseFormRegister` type
    errorMessage?: FieldError ;
}

const Input: React.FC<InputProps> = ({
                                         className,
                                         variant,
                                         register,
                                         errorMessage,
                                         fieldName,
                                         ...props
                                     }) => {

    return (
        <div className="relative w-full">
            <input
                {...register(fieldName)}
                className={cn(inputStyles({ variant }), className)}
                {...props}
            />

            {errorMessage && (
                <p className="text-sm text-red-500 ">{errorMessage.message}</p>
            )}

        </div>
    );
};

export default Input;
