import { Box, Button, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import SkeletonCard from './SkeletonCard'
import GameCardContainer from './GameCardContainer'
import UserGame from '../hooks/userGame'
import { GameQuery } from '../App'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: props) => {
  const {
    error,
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = UserGame(gameQuery)

  const skeleton = [1, 2, 3, 4, 5, 6]

  if (error) return <Text>{error.message}</Text>

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

  return (

      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding='10px'
        >
          {isLoading &&
            skeleton.map(skeleton => (
              <GameCardContainer key={skeleton}>
                <SkeletonCard />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map(game => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

    //  {hasNextPage && (
    //     <Button onClick={() => fetchNextPage()} marginY={5}>
    //       {isFetchingNextPage ? 'Loading...' : 'Load More'}
    //     </Button>
    //   )}


 
  )
}

export default GameGrid
