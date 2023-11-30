"use client";

import type { FunctionComponent, ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export const ThemeProvider: FunctionComponent<{
	children: ReactNode;
}> = function ThemeProvider({ children }) {
	return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};
