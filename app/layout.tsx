import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/layout/pageLayout";
import ReduxProvider from "@/components/providers/reduxProvider";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenous Admin",
  description: "Admin panel for Lenous platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased w-[100vw] overflow-x-hidden`}
      >
        <ReduxProvider>
          <PageLayout>{children}</PageLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
