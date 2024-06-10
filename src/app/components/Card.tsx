import { Card as ChakraCard, CardBody, CardFooter, CardHeader, Flex } from '@chakra-ui/react'
import { Button } from './Button'
import type { ReactNode } from 'react'
import { Image } from './Image'
import { Github } from 'lucide-react'
import { goToProject } from '../utils/openWindow'

interface CardProps {
  title: string
  description: string
  onClick?: () => void
  buttonContent?: string | ReactNode
  image: string
  repositoryLink: string
}

export function Card({ title, description, onClick, buttonContent, image, repositoryLink }: CardProps) {
  return (
    <ChakraCard className={`flex flex-col items-center gap-2 p-4 text-zinc-300 rounded-md shadow-md bg-slate-700`} maxW='sm'>
      <CardHeader>{title}</CardHeader>
      <CardBody className='flex flex-col justify-center'>
        <Image src={image} isRounded={false} />
        <Flex className='px-10 text-justify'>
          {description}
        </Flex>
      </CardBody>
      <CardFooter>
        <Flex className='gap-4'>
          <Button content={buttonContent} onClick={onClick} />
          <Button content={<Github />} onClick={() => goToProject(repositoryLink)} />
        </Flex>
      </CardFooter>
    </ChakraCard>
  )
}