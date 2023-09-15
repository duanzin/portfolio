import Link from "next/link";
import Typing from "./TypingAnimation.js";
import Image from "next/image.js";
import Img from "/public/images/1668711014937.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const languages = [
    "Javascript",
    "Typescript",
    "React",
    "Node",
    "Next",
    "Html",
    "Css",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Git/Github",
  ];

  return (
    <main className="w-full flex flex-col items-center ml-16">
      <header className="flex justify-start w-full">
        <Link href="https://www.linkedin.com/in/lucasduan/">
          <FaLinkedin className="text-4xl" />
        </Link>
        <Link href="https://github.com/duanzin">
          <FaGithub className="text-4xl" />
        </Link>
      </header>
      <section className="flex flex-col justify-center items-center gap-y-2 h-screen pb-60">
        <Image
          src={Img}
          width={300}
          height={300}
          alt="Picture of the author"
          className="rounded-full"
        />
        <h1 className="text-7xl">Olá, eu sou Lucas Duan</h1>
        <span className="text-2xl text-[#4466ff] w-fit">
          <Typing />
        </span>
        <a
          href="#contato"
          className="w-fit h-fit px-5 py-3 text-xl font-bold text-black bg-[#4466ff] hover:text-white"
        >
          Fale Comigo
        </a>
      </section>
      <section id="sobre" className="w-8/12 mb-10">
        <h2 className="text-6xl w-fit mx-auto">Sobre mim</h2>
        <div className="flex">
          <p className="text-xl w-1/2">
            Sou um desenvolvedor web especializado em full stack com diversas
            tecnologias. Possuo conhecimento de desenvolvimento front end e back
            end além de criação e comunicação com banco de dados.
            <br />
            <br />
            Tive minha formação em web development na Driven Education, e agora
            estou em busca de oportunidades de projetos que me permitam aplicar
            e aprimorar minhas habilidades de programação.
          </p>
          <div className="w-1/2">
            <h3 className="text-2xl">Linguagens/Frameworks</h3>
            <ListSkills languages={languages} />
          </div>
        </div>
      </section>
      <section id="contato" className="flex flex-col items-center mb-56">
        <h2 className="text-6xl w-fit mx-auto">Contato</h2>
        <p className="text-3xl">
          Voce pode me contatar pelo{" "}
          <Link
            href="https://www.linkedin.com/in/lucasduan/"
            className="text-[#4466ff] shadow-[inset_0_0_0_0_#4466ff] hover:shadow-[inset_150px_0_0_0_#4466ff] hover:text-white [transition:color_.3s_ease-in-out,box-shadow_.3s_ease-in-out]"
          >
            Linkedin
          </Link>{" "}
          ou pelo seguinte email
        </p>
        <a
          href="mailto:lucaduan@gmail.com"
          className="text-4xl hover:text-[#4466ff]"
        >
          lucaduan@gmail.com
        </a>
      </section>
    </main>
  );
}

function ListSkills(props) {
  return (
    <ul className="flex gap-4 flex-wrap">
      {props.languages.map((language) => {
        return (
          <li key={language} className="bg-[#232323] p-2 inline">
            {language}
          </li>
        );
      })}
    </ul>
  );
}
