import { Button } from '@chakra-ui/react'

interface ButtonProps {
  content: string
  onClick?: () => void
  icon?: React.ReactNode
}

export function CvButton({ content, onClick, icon }: ButtonProps) {
  return (
    <Button onClick={onClick} colorScheme="blue" size="lg" className="border-8 border-blue-400 rounded-md text-zinc-100 bg-blue-400 flex flex-row items-center justify-center text-xl">
      <span style={{ verticalAlign: 'middle' }}>{icon}</span>
      <div className="w-2"></div>
      {content}
    </Button>
  )
}

// <button className="border-8 border-blue-400 rounded-md text-zinc-100 bg-blue-400 flex flex-row items-center justify-center text-xl" onClick={onClick}>
//   <span style={{ verticalAlign: 'middle' }}>{icon}</span>
//   <div className="w-2"></div>
//   {content}
// </button>