import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google"; // Added Libre Baskerville
import "./globals.css";
import StickyFooter from "@/components/StickyFooter";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Added Premium Serif Font
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heading", // Mapped to var(--font-heading)
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cabelo Sem Formol",
    default: "Cabelo Sem Formol | Autoridade em Alisamento Seguro",
  },
  description: "Portal editorial focado em química capilar segura. Análises técnicas, reviews baseados em dados, testes de pH e segurança de marcas.",
  metadataBase: new URL("https://cabelosemformol.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cabelo Sem Formol | Autoridade em Alisamento Seguro",
    description: "Análises técnicas, reviews baseados em dados e ciência. Descubra o que realmente funciona para o seu cabelo.",
    url: "https://cabelosemformol.com.br",
    siteName: "Cabelo Sem Formol",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Cabelo Sem Formol - Análises Técnicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabelo Sem Formol",
    description: "Análises técnicas de produtos capilares baseadas em ciência.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "google-site-verification-code", // Placeholder to be replaced
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cabelo Sem Formol",
    url: "https://cabelosemformol.com.br",
    logo: "https://cabelosemformol.com.br/logo.png",
    sameAs: [
      "https://facebook.com/cabelosemformol",
      "https://instagram.com/cabelosemformol",
      "https://youtube.com/cabelosemformol"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999",
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese"
    }
  };

  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} antialiased font-display bg-bg-light text-gray-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}

