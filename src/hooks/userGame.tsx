import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { GameQuery } from '../App'
import { FetchResponse } from '../services/api-client'
import { Platform } from './usePlatforms'
import APIClient from '../services/api-client'
import ms from 'ms'
const apiClient = new APIClient<Game>('/games')
export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  rating_top: number
  rating: number
}

const UserGame = (gameQuery: GameQuery) =>
 useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['game', gameQuery],
    queryFn: ({pageParam=1}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platform: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.sreachText,
          page:pageParam,
        }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
   },
   staleTime: ms('24h')
    
  })

export default UserGame
