import { Button as ChakraButton } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface ButtonProps {
  content: string | ReactNode
  onClick?: () => void
  icon?: React.ReactNode
}

export function Button({ content, onClick, icon }: ButtonProps) {
  const isClickable = !!onClick
  return (
    <ChakraButton onClick={onClick} colorScheme="slate" size="lg" className={`border-8 border-slate-800 rounded-md text-zinc-100 bg-slate-800 flex flex-row items-center justify-center text-xl  ${isClickable ? 'cursor-pointer' : 'cursor-auto'}`}>
      <span style={{ verticalAlign: 'middle' }}>{icon}</span>
      {icon && <div className="w-2"></div>}
      {content}
    </ChakraButton>
  )
}