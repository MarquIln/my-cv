import { Image as ChakraImage } from '@chakra-ui/react'

interface ImageProps {
  src: string
  isRounded?: boolean
  isCentered?: boolean
}

export function Image({ src, isRounded = true, isCentered = true }: ImageProps) {
  return (
    <ChakraImage
      className={`rounded-${isRounded ? 'full' : 'none'} ${isCentered ? 'mx-auto' : ''}`}
      boxSize='150px'
      src={src}
      alt='Era para ter uma imagem aqui né 🤷‍♂️'
    />
  )
}