import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khamari Thompson — Software Engineer & Founder",
  description: "GT CS grad student, iOS developer, and founder building consumer apps and infrastructure tools.",
  openGraph: {
    title: "Khamari Thompson — Software Engineer & Founder",
    description: "GT CS grad student, iOS developer, and founder building consumer apps and infrastructure tools.",
    url: "https://khamarit.com",
    siteName: "Khamari Thompson Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
