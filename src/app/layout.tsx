import "./globals.css";
import React from "react";

export const metadata = {
  title: "Manu Maranzana",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/logo.svg" sizes="any" />
        </head>
        <body className="flex flex-col min-h-screen">
        {children}
        </body>
        </html>
    );
}
