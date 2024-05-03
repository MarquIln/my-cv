'use client'
import { Linkedin } from "lucide-react"
import { CvButton } from "./components/Button"
import { CvCard } from "./components/Card"

export default function Home() {
  function getGreeting() {
    const currentTime = new Date().getHours()
    if (currentTime >= 5 && currentTime < 12) {
      return "Bom dia"
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Boa tarde"
    } else {
      return "Boa noite"
    }
  }

  function downloadCV() {
    window.open("https://drive.google.com/file/d/1CxAtjrd-yrFqwakL5IJCJCS1tMjXlOAg/view?usp=sharing", "_blank")
  }

  function goToLinkedIn() {
    window.open("https://www.linkedin.com/in/marcosraach/", "_blank")
  }

  return (
    <main className="flex min-h-screen flex-col p-10 bg-zinc-800 text-zinc-100">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl">Olá {getGreeting()}, tudo bem?</h1>
        <h2 className="text-xl">Me chamo Marcos Raach e atualmente sou estudante de Engenharia de Software na PUCRS</h2>
        <p>Estou buscando novos desafios e oportunidades para aprender e crescer profissionalmente na área</p>
        <div className="flex gap-10">
          <CvButton content="Download do Curriculo" onClick={downloadCV} />
          <CvButton content="LinkedIn" onClick={goToLinkedIn} icon={<Linkedin />} />
        </div>
      </div>
      <div>
        <h1 className="text-xl text-center py-10">
          Projetos em que participei:
        </h1>
        <div className="flex flex-col items-center justify-center gap-10 py-10">
          <CvCard title="Comunidade Universitaria" description="a"/>
          <CvCard title="Trivia Quiz" description="a"/>
          <CvCard title="Guess CS:GO Skin" description="a"/>
        </div>
      </div>
    </main>
  );
}
