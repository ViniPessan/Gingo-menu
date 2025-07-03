import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredericka_the_Great } from "next/font/google";

import "./globals.css";

const FrederickaTheGreat = Fredericka_the_Great({
  variable: "--font-Fredericka-the-Great",
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gingo Menu",
  description: "Cardápio digital Gingo hamburgueia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${FrederickaTheGreat.variable}`}>
      <body className="relative min-h-screen antialiased text-white">
          <div className="absolute top-0 left-0 w-full h-[800px] -z-10 bg-[url('/background.jpeg')] bg-cover bg-top">
          <div className="w-full h-full bg-gradient-to-b from-black/0 to-black/100 backgroundBlur" />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
