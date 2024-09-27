import { useQuery } from '@tanstack/react-query'
import { FetchResponse } from '../services/api-client'
import platfoms from '../data/platfoms'
import APIClient from '../services/api-client'
import ms from 'ms'
const apiClient = new APIClient<Platform>('/platforms/lists/parents')
export interface Platform {
  id: number
  name: string
  slug: string
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData:platfoms
  })
export default usePlatforms
