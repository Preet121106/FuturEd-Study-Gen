import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkLoaded,
  ClerkProvider,
  GoogleOneTap,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith",
  description: "ai",
  icons: {
    icon: "/brain-circuit.svg", // Make sure this file exists in your /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <GoogleOneTap />
        <body className={inter.className}>
          <ClerkLoaded>{children}</ClerkLoaded>
        </body>
      </ClerkProvider>
    </html>
  );
}
