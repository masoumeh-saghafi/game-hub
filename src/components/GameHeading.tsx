import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'

interface props {
  gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: props) => {
  const genre=useGenre(gameQuery.genreId)
 const platform=usePlatform(gameQuery.platformId)
 
  const heading = `${platform?.name || ''} ${genre?.name || ''} Game`
  return (
    <Heading as='h1' marginY={5}>
      {heading}
    </Heading>
  )
}

export default GameHeading
