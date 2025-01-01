import React from 'react';
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/_utils/utils";

export const buttonStyles = cva(
    "transition duration-200 ease-in-out transform hover:scale-95  px-5 py-2 font-bold rounded-md h-full w-full", {
        variants: {
            variant: {
                default: "bg-black text-white dark:bg-white dark:text-black",
                outline: "border-2 dark:border-primary-white border-primary-black",
                transparent: "bg-transparent"
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
    children?: React.ReactNode;
    className?: string; // Allow custom additional classes
}

const Button: React.FC<ButtonProps> = ({ children, className, variant, ...props }) => {
    return (
        <button className={cn(buttonStyles({ variant }), className)} {...props}>
            {children}
        </button>
    );
};

export default Button;
