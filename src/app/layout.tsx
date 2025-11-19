import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme";

export const metadata = {
  title: "Ashwin Mahadevan",
} satisfies Metadata;

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-mauve-base-subtle dark:bg-mauve-base">
        <ThemeProvider>
          <main className="container max-w-3xl lg:max-w-5xl mx-auto bg-mauve-base dark:bg-mauve-base-subtle min-h-[200vh] px-4 sm:px-8">
            {props.children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
