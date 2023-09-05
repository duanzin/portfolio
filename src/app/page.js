import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
      <section>
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
        
      </section>
    </main>
  );
}
