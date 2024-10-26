import { useQuery } from '@tanstack/react-query'
import { FetchResponse } from '../services/api-client'
import platfoms from '../data/platfoms'
import APIClient from '../services/api-client'
import ms from 'ms'
import Platform  from '../entities/Platform'
const apiClient = new APIClient<Platform>('/platforms/lists/parents')
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData:platfoms
  })
export default usePlatforms
