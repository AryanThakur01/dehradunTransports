import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import "./layout.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Script from "next/script";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Balaji packers and movers",
  description: "get the visualization of data structures and algorithms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-background text-foreground"}>
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
          </Script>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Top Navigation Menu */}
          <header className="m-auto sticky top-0 w-full border-b border-border py-2 text-foreground z-50 bg-background flex items-center">
            <Nav />
          </header>
          {/* Main Contents */}
          <main>{children}</main>
          <Footer classname="bg-secondary" />
          <div className="text-center my-3">
            <p>Copyright © Aryan Tech Solutions | All rights reserved</p>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
