import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import Game from '../entities/Game'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface props {
  game: Game
}

const GameCard = ({ game }: props) => {
  return (
    <Card>
      {/* <Image src={getCroppedImageUrl(game.background_image)} /> */}

      <Image src={game.background_image} />
      <CardBody>
        <HStack justify='space-between' marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
