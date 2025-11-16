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
      <body className="bg-mauve-base-subtle">
        <ThemeProvider>
          <main className="container mx-auto bg-mauve-base min-h-screen px-4 sm:px-8 lg:px-16">
            {props.children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
