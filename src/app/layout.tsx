import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labyrnth Co",
  description: "Labyrnth Co",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Labyrnth Co",
    description: "Labyrnth Co",
    url: process.env.VERCEL_URL,
    siteName: "Labyrnth Co",
    images: [
      {
        width: 655,
        height: 336,
        url: `${process.env.VERCEL_URL}/img/banner.png`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} antialiased bg-[#F3F3F3] flex`}
      >
        {children}
      </body>
    </html>
  );
}
