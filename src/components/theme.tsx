"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function ThemeProvider(props: { children: ReactNode }) {
	return <NextThemeProvider attribute="class">{props.children}</NextThemeProvider>;
}
