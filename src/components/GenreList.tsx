import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'

interface props {
  onSelectGenre: (genre: Genre) => void
  selecteGenreId?: number
}
const GenreList = ({ selecteGenreId, onSelectGenre }: props) => {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        {' '}
        Genres
      </Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                src={genre.image_background}
                objectFit='cover'
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                onClick={() => onSelectGenre(genre)}
                variant='link'
                fontSize='lg'
                fontWeight={genre.id === selecteGenreId ? 'bold' : 'normal'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
