import Link from "next/link";
import Image from "next/image.js";
import SocialImg from "/public/images/socialPrint.png";
import TodoImg from "/public/images/corePrint.png";
import FoodImg from "/public/images/foodPrint.png";

export default function Project() {
  const projects = [
    {
      title: "Social Network",
      url: "https://github.com/duanzin/social_network-front",
      thumb: SocialImg,
      technologies: "Nextjs, Tailwind, Typescript, Node, Prisma",
      description: `Rede social baseada no twitter. Usuários podem postar e ver posts
          de outros usuários e segui-los. Novas funcionalidades estão sendo
          implementadas constantemente. O código do backend está no
          repositório linkado no readme.`,
    },
    {
      title: "CoreNotes",
      url: "https://github.com/duanzin/corelab-front",
      thumb: TodoImg,
      technologies: "React, Typescript, Node",
      description: `Aplicativo web para criar notas de tarefas. Após escrever
       uma nota é possivel editar seu conteudo, mudar sua cor, favorita-la e 
       deleta-la. O código do backend está no repositório linkado no readme.`,
    },
    {
      title: "Fast Food",
      url: "https://github.com/duanzin/fast_food-front",
      thumb: FoodImg,
      technologies: "React, Typescript, Node, Tailwind",
      description: `Aplicativo para escolher lanche fast food. Um usuário pode
       escolher quais lanches deseja e outros podem ver os lanches que estão sendo
        feitos. O código do backend está no repositório linkado no readme.`,
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-between gap-y-14 max-[1263px]:justify-center">
      {projects.map((data) => (
        <div className="flex flex-col w-[31.25rem]">
          <Link
            href={data.url}
            target="_blank"
            className="w-full h-64 mb-5 max-sm:h-[51.2%]"
          >
            <Image
              src={data.thumb}
              alt="Picture of project"
              className="h-full w-full"
            />
          </Link>
          <Link href={data.url} target="_blank" className="text-3xl">
            {data.title}
          </Link>
          <span className="text-2xl text-[#4466ff]">{data.technologies}</span>
          <p className="text-lg">{data.description}</p>
        </div>
      ))}
    </div>
  );
}
