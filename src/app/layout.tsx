import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import "./layout.scss";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-foreground"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top Navigation Menu */}
          <header className="m-auto sticky top-0 w-full border-b border-border py-2 text-foreground z-50 bg-background/90 flex items-center backdrop-blur-sm shadow">
            <Nav />
          </header>
          {/* Main Contents */}
          <main>{children}</main>
          <Footer classname="bg-secondary" />
          <div className="text-center my-1">
            <p>Copyright © Aryan Tech Solutions | All rights reserved</p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
