import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Header from "./components/Header/Header"; 
import Hero from "./components/Hero/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "मिर्मिरे ऊर्जा विकास सहकारी संस्था",
  description: "मिर्मिरे ऊर्जा विकास सहकारी संस्था",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}> 
        <>
        <Header /> 
        <Hero />
        </>
      </body>
    </html>
  );
}
