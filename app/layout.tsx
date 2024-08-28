import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/ui/footer/Footer";
import { ThemeProvider } from "next-themes";
import { trpc } from "@/server/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <trpc.Provider>
            <ThemeProvider attribute="class" defaultTheme="system">
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </trpc.Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
