import type { Metadata } from "next";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

import "./globals.css";
import { DataProvider } from "@/context/dataProvider";
import { SearchProvider } from "@/context/search";
import { BasketProvider } from "@/context/basket";

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
            <BasketProvider>
              {" "}
              <SearchProvider>
                <DataProvider>
                  <Header />
                  {children} <Footer />
                </DataProvider>
              </SearchProvider>{" "}
            </BasketProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
