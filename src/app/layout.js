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
        <nav className="w-16 h-screen bg-black">
          <a href="#sobre" className="text-3xl text-center font-bold w-full p-2.5 [writing-mode:vertical-lr] hover:bg-[#4466ff]">
            Sobre
          </a>
          <a href="#contato" className="text-3xl text-center font-bold w-full p-2.5 [writing-mode:vertical-lr] hover:bg-[#4466ff]">
            Contato
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
