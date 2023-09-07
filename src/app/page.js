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
        <h1>Olá, eu sou Lucas Duan</h1>
        <span>Desenvolvedor fullstack</span>
      </section>
      <section id="sobre">
        <h2>Sobre mim</h2>
        <div>
          <p>
            Sou um desenvolvedor web especializado em full stack com diversas
            tecnologias. Possuo conhecimento de desenvolvimento front end e back
            end além de criação e comunicação com banco de dados. Tive minha
            formação em web development na Driven Education, e agora estou em
            busca de oportunidades de projetos que me permitam aplicar e
            aprimorar minhas habilidades de programação.
          </p>
        </div>
        <div>
          <h3>Linguagens/Frameworks</h3>
          <Skills languages={languages} />
        </div>
      </section>
      <section id="contato">
        <h2>Contato</h2>
        <p>
          Voce pode me contatar pelo{" "}
          <Link href="https://www.linkedin.com/in/lucasduan/">Linkedin</Link> ou
          pelo seguinte email
        </p>
        <span>lucaduan@gmail.com</span>
      </section>
    </main>
  );
}

function Skills(props) {
  return (
    <ul>
      {props.languages.map((language) => {
        return <li key={language}>{language}</li>;
      })}
    </ul>
  );
}
