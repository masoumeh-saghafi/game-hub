import { Image, ImageProps } from '@chakra-ui/react'
import bullEyse from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emjiMao: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullEyse, alt: 'exceptional', boxSize: '35px' }
  }
  return <Image {...emjiMao[rating]} marginTop={1} />
}

export default Emoji
