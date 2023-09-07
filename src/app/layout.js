import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio de Lucas Duan Rodrigues",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="#sobre" className="bg-black text-3xl [writing-mode:vertical-lr] hover:bg-[#4466ff]">
            Sobre
          </a>
          <a href="#contato" className="bg-black text-3xl [writing-mode:vertical-lr] hover:bg-[#4466ff]">
            Contato
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
