import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Product Owner & Agile PM`,
  description: `Portfolio of ${siteConfig.name}, ${siteConfig.title} based in ${siteConfig.location}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
