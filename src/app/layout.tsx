import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Import Providers
import Providers from "@/components/Theme/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Futurisme Documentation",
  description: "Dokumentasi teknis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Root Layout hanya menangani Provider Global */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}