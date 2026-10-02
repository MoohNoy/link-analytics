import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkpulse — Shorten links. See exactly who clicks.",
  description:
    "ย่อลิงก์พร้อม dashboard วิเคราะห์ทราฟฟิกแบบเรียลไทม์ QR code และสรุปข้อมูลด้วย AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
