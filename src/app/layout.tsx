import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utils";

import "./globals.css";
import "microtip/microtip.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crit App",
  description: "Get feedback from clients like it was nutin",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
