import type { Metadata } from "next";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ashwin Mahadevan",
} satisfies Metadata;

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
