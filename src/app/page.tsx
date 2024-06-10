'use client'

import { Flex, Text } from "@chakra-ui/react"
import { Github, Linkedin } from "lucide-react"
import { projects } from '../../projects.json'
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { getCV } from "./utils/getCV"
import { goToGithub } from "./utils/goToGithub"
import { goToLinkedIn } from "./utils/goToLinkedIn"

export default function Home() {
  function getGreeting() {
    const currentTime = new Date().getHours()
    if (currentTime >= 5 && currentTime < 12) {
      return "Bom dia"
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Boa tarde"
    }
    return "Boa noite"
  }

  function goToProject(link: string) {
    window.open(link, "_blank")
  }

  const language = navigator.language

  return (
    <main className="flex min-h-screen flex-col p-10 bg-slate-900 text-zinc-200">
      <Flex className="flex-col gap-2">
        <Text fontSize="xxx-large">Olá, {getGreeting()}, tudo bem?</Text>
        <Text fontSize="xx-large">Vou me apresentar um pouco para você...</Text>
        <Flex className="flex-col px-10">
          <Text fontSize="larger">Me chamo Marcos Vinicius Raach, estou atualmente no 5º semestre de Engenharia de Software na PUC-RS,</Text>
          <Text fontSize="larger">Sou uma pessoa apaixonada por tecnologia desde criança e após ingressar na faculdade, me apaixonei pela programação e desenvolvimento de software.</Text>
          <Text fontSize="larger">Embora não tenha tido ainda nenhuma experiencia no mercado de trabalho, tenho me dedicado a desenvolver projetos pessoais e projetos da faculdade para adquirir conhecimentos e o mais rapido possivel ingressar como estagiario em alguma empresa.</Text>
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
      <Flex className="flex-col justify-center">
        <Text fontSize="larger">
          Aqui estão alguns dos projetos pessoais e projetos da faculdade que desenvolvi até agora:
        </Text>
        <Flex className="flex gap-5">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              image={project.image}
              description={project.description}
              onClick={() => goToProject(project.link)}
              buttonContent={project.buttonContent}
            />
          ))}
        </Flex>

      </Flex>
    </main>
  );
}
