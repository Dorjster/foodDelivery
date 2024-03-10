import type { Metadata } from "next";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Food fucking Delivery",
  description: "eat that u fkin piece of shit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="px-[20px] md:px-[120px]">
            <Header />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
