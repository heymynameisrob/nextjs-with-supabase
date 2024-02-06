import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Providers } from "@/context/providers";
import { cn } from "@/utils";

import "./globals.css";
import "microtip/microtip.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS & Supabase Full Stack Starter",
  description: "Some cool shit here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-background text-primary antialiased min-h-[100dvh]",
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
