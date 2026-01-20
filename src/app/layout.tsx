import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Cabelo Sem Formol | Autoridade em Alisamento Seguro",
  description: "Portal editorial focado em química capilar segura. Análises técnicas, reviews baseados em dados e ciência.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${roboto.variable} antialiased font-body bg-bg-soft text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
