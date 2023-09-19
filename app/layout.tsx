import { CssBaseline, StyledEngineProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello CSS!",
  description: "Various CSS examples",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline>
          <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        </CssBaseline>
      </body>
    </html>
  );
};

export default RootLayout;
