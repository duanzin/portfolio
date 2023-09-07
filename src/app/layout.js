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
          <a href="#sobre" className="[writing-mode:vertical-lr]">
            Sobre
          </a>
          <a href="#contato" className="[writing-mode:vertical-lr]">
            Contato
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
