import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

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
  openGraph: {
    title: "iampitr.dev — web developer",
    description:
      "Explore the portfolio, skills, and projects of iampitr, a passionate web developer focused on clean code, user experience, and modern web technologies.",
    type: "website",
    url: "https://iampitr.dev/",
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7d607d8e41f845c2a009d72ec2add440"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
