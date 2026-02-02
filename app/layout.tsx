import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e40af" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${openSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
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
