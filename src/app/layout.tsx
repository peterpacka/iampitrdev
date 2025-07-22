import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iampitr.dev",
  description:
    "Portfolio website for Peter Packa, a web developer specializing in JavaScript, TypeScript, React, Next.js, Tailwind CSS, and more. Explore projects, skills, and contact information.",
  authors: [{ name: "Peter Packa" }],
  keywords: [
    "Peter Packa",
    "web developer",
    "portfolio",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Svelte",
    "MongoDB",
    "Lua",
    "Node.js",
    "frontend developer",
    "modern web applications",
  ],
  themeColor: "#0ea5e9",
  openGraph: {
    title: "iampitr.dev — web developer",
    description:
      "Explore the portfolio, skills, and projects of iampitr, a passionate web developer focused on clean code, user experience, and modern web technologies.",
    type: "website",
    url: "https://iampitr.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
