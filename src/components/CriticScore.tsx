import { Badge } from "@chakra-ui/react"
interface props{
   score:number
}

const CriticScore = ({ score }: props) => {
   let color = score > 75 ? 'green' : score > 60 ? 'yellow':''
  return (
     <Badge colorScheme={color} fontSize='14px'borderRadius='4px' >{score}</Badge>
  )
}

export default CriticScore