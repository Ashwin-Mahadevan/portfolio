import type { FunctionComponent, ReactNode } from "react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/header";

export const runtime = "edge";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
	<html lang="en">
		<body>
			<Header />
			{children}
			<Analytics />
		</body>
	</html>
);

export default Layout;
