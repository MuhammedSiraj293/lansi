import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "./AnimatedCursor";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbSchema from "@/components/Schemas/breadcrumbSchema";
// import BreadCrumbJsonLd from "next-seo/lib/jsonld/breadcrumb";
import HreflangTags from "@/components/Language/herflang";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lanstitut - Upskill Globally",
  description: "Secure your Job Placement Globally with Lanstitut.",
  keywords: "Lanstitut, Job Placement, Language Training, Healthcare Courses",
  metadataBase: new URL("https://lanstitut.com"),
  openGraph: {
    title: "Lanstitut",
    description: "Upskill Globally",
    url: "https://lanstitut.com",
    siteName: "Lanstitut",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lanstitut",
    creator: "@Lanstitut",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AnimatedCursor />
        <BreadcrumbSchema />
        <HreflangTags />
        {/* <BreadCrumbJsonLd /> */}
        {children}
      </body>
    </html>
  );
}
