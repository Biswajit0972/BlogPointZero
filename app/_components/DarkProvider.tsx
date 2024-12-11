"use client"

import React from 'react'
import {ThemeProvider} from "next-themes";

const DarkProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <ThemeProvider attribute="class" storageKey="theme" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default DarkProvider;
