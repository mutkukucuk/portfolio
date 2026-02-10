import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Utku Kucuk | Developer",
    template: "%s | Utku Kucuk",
  },
  description: "Personal portfolio of Utku Kucuk, a software engineer specializing in backend technologies and scalable applications.",
  metadataBase: new URL("https://utkukucuk.com"),
  keywords: ["Utku Kucuk", "Software Engineer", "Backend Developer", "Portfolio", "Web Development", "Node.js", "Java", "Spring Boot"],
  authors: [{ name: "Utku Kucuk", url: "https://utkukucuk.com" }],
  creator: "Utku Kucuk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utkukucuk.com",
    title: "Utku Kucuk | Developer",
    description: "Personal portfolio of Utku Kucuk, a software engineer specializing in backend technologies.",
    siteName: "Utku Kucuk Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utku Kucuk | Developer",
    description: "Personal portfolio of Utku Kucuk, a software engineer specializing in backend technologies.",
    creator: "@mutkukucuk", // Assuming this handle based on github/linkedin patterns or defaults
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
