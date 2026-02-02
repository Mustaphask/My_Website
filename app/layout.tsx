import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  title: "Mustafa Skaiki | Business Developer | ERP & Digital Transformation",
  description:
    "Dynamic Business Developer with extensive experience in ERP systems and digital transformation. Strategic planning, client acquisition, and account growth. Based in Beirut, Lebanon.",
  keywords: [
    "Mustafa Skaiki",
    "Business Developer",
    "ERP",
    "Digital Transformation",
    "Odoo",
    "Beirut",
    "Lebanon",
  ],
  authors: [{ name: "Mustafa Skaiki", url: "https://www.linkedin.com/in/mustapha-skaiki-9536b1164" }],
  creator: "Mustafa Skaiki",
  openGraph: {
    type: "website",
    title: "Mustafa Skaiki | Business Developer | ERP & Digital Transformation",
    description:
      "Dynamic Business Developer with extensive experience in ERP systems and digital transformation. Based in Beirut, Lebanon.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Skaiki | Business Developer | ERP & Digital Transformation",
    description:
      "Dynamic Business Developer with extensive experience in ERP systems and digital transformation. Based in Beirut, Lebanon.",
  },
  robots: "index, follow",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
