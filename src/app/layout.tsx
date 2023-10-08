import React, { type ReactNode, type FunctionComponent } from "react";
import "@/styles/globals.css";

type Props = { children: ReactNode };

const Layout: FunctionComponent<Props> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default Layout;
