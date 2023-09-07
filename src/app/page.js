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
    <main>
      <header>
        <Link href="https://www.linkedin.com/in/lucasduan/">Linkedin</Link>
        <Link href="https://github.com/duanzin">Github</Link>
      </header>
      <section>
        <h1 className="text-7xl">Olá, eu sou Lucas Duan</h1>
        <span className="text-2xl text-[#4466ff]">Desenvolvedor fullstack</span>
      </section>
      <section id="sobre">
        <h2 className="text-6xl">Sobre mim</h2>
        <div>
          <p className="text-xl">
            Sou um desenvolvedor web especializado em full stack com diversas
            tecnologias. Possuo conhecimento de desenvolvimento front end e back
            end além de criação e comunicação com banco de dados. Tive minha
            formação em web development na Driven Education, e agora estou em
            busca de oportunidades de projetos que me permitam aplicar e
            aprimorar minhas habilidades de programação.
          </p>
          <div>
            <h3 className="text-2xl">Linguagens/Frameworks</h3>
            <Skills languages={languages} />
          </div>
        </div>
      </section>
      <section id="contato">
        <h2 className="text-6xl">Contato</h2>
        <p className="text-3xl">
          Voce pode me contatar pelo
          <Link href="https://www.linkedin.com/in/lucasduan/" className="text-[#4466ff]">Linkedin</Link> ou
          pelo seguinte email
        </p>
        <span className="text-4xl">lucaduan@gmail.com</span>
      </section>
    </main>
  );
}

function Skills(props) {
  return (
    <ul className="flex gap-4">
      {props.languages.map((language) => {
        return <li key={language}>{language}</li>;
      })}
    </ul>
  );
}
