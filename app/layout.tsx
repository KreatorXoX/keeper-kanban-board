import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import { useTheme } from "./hooks/useTheme";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL('https://www.example.com/kanban-board'), // Use the URL class to create a URL object
  title: "Keeper The Kanban Board",
  description:
    "A modern Kanban board application built with Next.js for efficient task and project management.",
  keywords: [
    "Kanban board",
    "task management",
    "project management",
    "Next.js",
    "React",
    "web application",
    "server components",
  ],
  authors: [
    {
      name: "Gorkem Gocer",
      url: "https://ggocer-dev.vercel.app/",
    },
  ],
  generator: "Next.js",
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
