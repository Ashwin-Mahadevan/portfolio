import React, { type ReactNode, type FunctionComponent } from "react";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export const runtime = "edge";

type Props = { children: ReactNode };

const Layout: FunctionComponent<Props> = ({ children }) => (
  <html lang="en">
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default Layout;
