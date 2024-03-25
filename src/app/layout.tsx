"use client";

import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { UserInputProvider } from "@/providers/UserInput";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <UserInputProvider>
          <h1>pretend this is sidebar</h1>
          <main className="flex flex-col item-center justify-center gap-2 p-20">
            {children}
          </main>
        </UserInputProvider>
      </body>
    </html>
  );
}
