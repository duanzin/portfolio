"use client";
import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bem vindo ao meu Portfolio",
          "Sou um Desenvolvedor Fullstack",
          "Veja mais abaixo",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
