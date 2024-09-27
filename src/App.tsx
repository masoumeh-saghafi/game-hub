import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import { Platform } from './hooks/usePlatforms'

export interface GameQuery {
  genreId?: number
  platformId?:number
  sortOrder: string
  sreachText: string
}
function App () {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px  1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar
          onSearch={sreachText => setGameQuery({ ...gameQuery, sreachText })}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList
            selecteGenreId={gameQuery.genreId}
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId:platform.id })
                } 
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOreder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
