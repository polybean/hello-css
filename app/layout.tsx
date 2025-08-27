import { CssBaseline, StyledEngineProvider } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello CSS!",
  description: "Various CSS examples",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CssBaseline>
          <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
        </CssBaseline>
      </body>
    </html>
  );
};

export default RootLayout;
