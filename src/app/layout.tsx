import type { Metadata } from "next";
import { Koulen, Kantumruy_Pro, Metal, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const koulen = Koulen({
  subsets: ["khmer"],
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
  subsets: ["khmer"],
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
  title: "ណាំង សីហា | Senior Software Engineer & AI Specialist",
  description:
    "វិស្វករសូហ្វវែរ Full-Stack (Web & Mobile), Cloud Architecture និងគ្រូបណ្តុះបណ្តាល AI សម្រាប់គ្រូបង្រៀនកម្ពុជា។",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React Native",
    "AI Educator",
    "Cambodia Developer",
    "ណាំង សីហា",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="km"
      className={`${koulen.variable} ${kantumruyPro.variable} ${metal.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground selection:bg-primary/10 selection:text-primary">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

