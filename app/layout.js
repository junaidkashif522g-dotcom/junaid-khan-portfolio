import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: "M. Junaid Khan | Marketing & Merchandising",
  description:
    "Marketing and merchandising professional in Lahore with experience in web content, SEO, email campaigns and data reporting.",
  openGraph: {
    title: "M. Junaid Khan | Marketing & Merchandising",
    description: "Web content, SEO, email campaigns and data reporting.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
