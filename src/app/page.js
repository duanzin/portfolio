import Link from "next/link";

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
    <main className="w-full flex flex-col items-center">
      <header>
        <Link href="https://www.linkedin.com/in/lucasduan/">Linkedin</Link>
        <Link href="https://github.com/duanzin">Github</Link>
      </header>
      <section className="w-fit">
        <h1 className="text-7xl">Olá, eu sou Lucas Duan</h1>
        <span className="text-2xl text-[#4466ff]">Desenvolvedor fullstack</span>
      </section>
      <section id="sobre" className="w-8/12">
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
            <Skills languages={languages} />
          </div>
        </div>
      </section>
      <section id="contato">
        <h2 className="text-6xl w-fit mx-auto">Contato</h2>
        <p className="text-3xl">
          Voce pode me contatar pelo
          <Link
            href="https://www.linkedin.com/in/lucasduan/"
            className="text-[#4466ff]"
          >
            {" "}
            Linkedin{" "}
          </Link>
          ou pelo seguinte email
        </p>
        <span className="text-4xl">lucaduan@gmail.com</span>
      </section>
    </main>
  );
}

function Skills(props) {
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
