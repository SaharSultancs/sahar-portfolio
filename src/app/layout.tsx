import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ViewCursor } from "@/components/view-cursor";
import "./globals.css";

const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const title = "Sahar Sultan | Web Developer & AI Automation";
const description =
  "Freelance web developer building modern websites, e-commerce stores and AI automation solutions. View my projects and get in touch.";
// Hero screenshot captured at 1200x630; the only share image for every page.
const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: "Sahar Sultan, Web Developer: portfolio hero" };

export const metadata: Metadata = {
  metadataBase: new URL("https://saharsultan.dev"),
  title: { default: title, template: "%s | Sahar Sultan" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://saharsultan.dev",
    siteName: "Sahar Sultan",
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ViewCursor />
      </body>
    </html>
  );
}
