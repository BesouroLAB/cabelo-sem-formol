import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { getOrganizationSchema, getWebSiteSchema, getPersonSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: "/",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE.language}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        {/* Person emitido globalmente (não só em /sobre) para que @id de author/founder
            resolva em qualquer página avaliada isoladamente pelo Rich Results Test */}
        <JsonLd data={getPersonSchema()} />
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-serif font-bold text-2xl text-[#1A1A1A] tracking-tight">
              Cabelo<span className="text-[#C2A878]">SemFormol</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-600">
              <Link href="/progressivas/melhor-progressiva-sem-formol" className="hover:text-[#C2A878] transition-colors">Ranking 2026</Link>
              <Link href="/progressivas" className="hover:text-[#C2A878] transition-colors">Progressivas</Link>
              <Link href="/sobre" className="hover:text-[#C2A878] transition-colors">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-[#1A1A1A] text-white py-12 mt-20 border-t-4 border-[#C2A878]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-sm">
              <span className="font-serif font-bold text-2xl tracking-tight mb-4 block">
                Cabelo<span className="text-[#C2A878]">SemFormol</span>
              </span>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Nosso compromisso é com a ciência capilar. Analisamos bulas, ativos químicos e registros da Anvisa para que você saiba exatamente o que está colocando no cabelo.
              </p>
              <p className="text-gray-500 text-xs italic">
                Participamos do Programa de Associados da Amazon. Comprando pelos nossos links, você apoia nosso jornalismo independente sem custo extra.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-400 font-semibold">
              <span className="text-white font-bold mb-2 uppercase tracking-wider text-xs">Acesso Rápido</span>
              <Link href="/" className="hover:text-white transition-colors">Início</Link>
              <Link href="/progressivas" className="hover:text-white transition-colors">Progressivas Sem Formol</Link>
              <Link href="/progressivas/borabella-nao-chore-mais-resenha" className="hover:text-white transition-colors">Borabella Não Chore Mais</Link>
              <Link href="/progressivas/fashion-gold-resenha" className="hover:text-white transition-colors">Fashion Gold</Link>
              <Link href="/sobre" className="hover:text-white transition-colors">Quem Somos</Link>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-between items-center">
            <span>&copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</span>
            <span>Feito com 🤍 no Brasil</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
