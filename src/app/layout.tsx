import type { Metadata } from "next";
import { Koulen, Kantumruy_Pro, Metal, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const koulen = Koulen({
  subsets: ["khmer", "latin"],
  weight: "400",
  variable: "--font-koulen",
  display: "swap",
});

const kantumruyPro = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kantumruy",
  display: "swap",
});

const metal = Metal({
  subsets: ["khmer", "latin"],
  weight: "400",
  variable: "--font-metal",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "គេហទំព័រផ្ទាល់ខ្លួន | AI សម្រាប់គ្រូបង្រៀន",
  description:
    "គេហទំព័រផ្ទាល់ខ្លួន បង្ហាញការងារ និងវគ្គបណ្តុះបណ្តាល \"AI សម្រាប់គ្រូបង្រៀន\"",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="km"
      className={`${koulen.variable} ${kantumruyPro.variable} ${metal.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
