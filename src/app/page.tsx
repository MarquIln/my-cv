'use client'

import { Flex, Text } from "@chakra-ui/react"
import { Github, Linkedin } from "lucide-react"
import { projects } from '../../projects.json'
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { getCV } from "./utils/getCV"
import { goToGithub, goToProject } from "./utils/openWindow"
import { goToLinkedIn } from "./utils/openWindow"
import { getGreeting } from "./utils/getGreeting"
import { ProfileCard } from "./components/ProfileCard"

export default function Home() {
  const language = navigator.language
  const thisProjectLink = "https://github.com/MarquIln/my-cv"

  return (
    <main className="flex min-h-screen flex-col bg-slate-900 text-zinc-300">
      <Flex className="flex-col gap-2 p-10">
        <Flex className="justify-between">
          <Text fontSize="xxx-large">Olá, {getGreeting()}, tudo bem?</Text>
          <Button content="Repositorio do Projeto" onClick={() => goToProject(thisProjectLink)}/>
        </Flex>
        <Text fontSize="xx-large">Vou me apresentar um pouco para você...</Text>
        <Flex className="flex-col px-10">
          <ProfileCard
            description="Me chamo Marcos Vinicius Raach, estou atualmente no 5º semestre de Engenharia de Software na PUC-RS, sou uma pessoa apaixonada por tecnologia desde criança e após ingressar na faculdade, me apaixonei pela programação e desenvolvimento de software. Embora não tenha tido ainda nenhuma experiencia no mercado de trabalho, tenho me dedicado a desenvolver projetos pessoais e projetos da faculdade para adquirir conhecimentos e o mais rapido possivel ingressar como estagiario em alguma empresa."
            title="Sobre mim"
            image={"https://github.com/Marquiln.png"}
          />
        </Flex>
        <Flex className="px-20 flex-col">
          <Text className="px-15" fontSize="larger">Se quiser saber mais sobre mim, acesse meu curriculo ou entre em contato comigo pelas redes sociais abaixo: </Text>
          <Flex className="py-5 gap-5 justify-center">
            <Button content="Curriculum" onClick={() => getCV(language)} />
            <Button content="LinkedIn" onClick={() => goToLinkedIn()} icon={<Linkedin />} />
            <Button content="GitHub" onClick={() => goToGithub()} icon={<Github />} />
          </Flex>
        </Flex>
      </Flex>
      <Flex className="flex-col p-10">
        <Text fontSize="larger" className="py-5">
          Aqui estão alguns dos projetos pessoais e projetos da faculdade que desenvolvi até agora:
        </Text>
        <Flex className="gap-5">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              image={project.image}
              description={project.description}
              onClick={() => goToProject(project.link)}
              buttonContent={project.buttonContent}
              repositoryLink={project.repositoryLink}
            />
          ))}
        </Flex>
      </Flex>
    </main>
  );
}
