import type { Metadata, Viewport } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title:       "محمد المطيري | mhmd.sa",
  description: "الموقع الشخصي لمحمد المطيري - رائد أعمال، قائد منتجات، ومبتكر تقني",
  keywords:    ["محمد المطيري", "مدير منتج", "ريادة أعمال", "تقنية", "السعودية"],
  authors:     [{ name: "محمد المطيري", url: "https://mhmd.sa" }],
  creator:     "محمد المطيري",
  metadataBase: new URL("https://mhmd.sa"),
  openGraph: {
    type:        "website",
    locale:      "ar_SA",
    url:         "https://mhmd.sa",
    title:       "محمد المطيري | mhmd.sa",
    description: "رائد أعمال، قائد منتجات، ومبتكر تقني",
    siteName:    "mhmd.sa",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "محمد المطيري | mhmd.sa",
    description: "رائد أعمال، قائد منتجات، ومبتكر تقني",
    creator:     "@mhmd",
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor:   "#0A0A0B",
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-dark text-brand-text antialiased">
        <CustomCursor />
        {children}
        <Toaster
          position="bottom-left"
          toastOptions={{
            style: {
              background: "#111113",
              border:     "1px solid #1f1f23",
              color:      "#e4e4e7",
              direction:  "rtl",
            },
          }}
        />
      </body>
    </html>
  );
}
