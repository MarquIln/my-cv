import { CardBody, Card as ChakraCard, Heading, Stack } from '@chakra-ui/react'
import { Image } from './Image'

interface ProfileCardProps {
  title: string
  description: string
  image: string
}

export function ProfileCard({ title, description, image }: ProfileCardProps) {
  return (
    <ChakraCard className='flex flex-col items-center gap-2 p-4 border border-zinc-300 rounded-md shadow-md text-zinc-300'
      direction="row"
      variant='elevated'
    >
      <Stack>
        <Heading>{title}</Heading>
        <CardBody className='flex flex-col justify-center'>
          {description}
        </CardBody>
      </Stack>
      <Image
        src={image}
      />
    </ChakraCard >
  )
}