import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Paul Codes Blog",
  description: "Created by Paul Rogers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      <body className="dark:bg-neutral-900">
        <Navbar />
        <main className="md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
