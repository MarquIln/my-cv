import { Card as ChakraCard, CardBody, CardFooter, CardHeader, Image } from '@chakra-ui/react'
import { Button } from './Button'
import type { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  onClick?: () => void
  buttonContent: string | ReactNode
  image: string
}

export function Card({ title, description, onClick, buttonContent, image }: CardProps) {
  return (
    <ChakraCard className={`flex flex-col items-center gap-2 p-4 text-zinc-200 rounded-md shadow-md bg-slate-700`}>
      <CardHeader>{title}</CardHeader>
      <CardBody className='flex flex-col justify-center'>
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={image}
          alt='Era para ter uma imagem aqui né 🤷‍♂️'
        />
        {description}
      </CardBody>
      <CardFooter>
        <Button content={buttonContent} onClick={onClick} />
      </CardFooter>
    </ChakraCard>
  )
}