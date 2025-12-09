import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CURVA Arquitectura | Diseñamos espacios que inspiran",
  description: "CURVA Arquitectura es un estudio contemporáneo definido por la claridad, precisión y diseño atemporal. Traducimos la arquitectura en espacios que perduran.",
  keywords: "arquitectura, diseño, contemporáneo, CURVA, espacios, México",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
