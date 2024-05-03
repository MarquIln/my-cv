import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react'
import { CvButton } from './Button'
interface CardProps {
  title: string
  description: string
  onClick?: () => void
}

export function CvCard({ title, description, onClick }: CardProps) {
  return (
    <Card className="flex flex-col items-center gap-2 p-4 bg-zinc-700 rounded-md shadow-md">
      <CardHeader>{title}</CardHeader>
      <CardBody>
        {description}
      </CardBody>
      <CardFooter>
        <CvButton content="Veja mais" onClick={onClick} />
      </CardFooter>
    </Card>
  )
}