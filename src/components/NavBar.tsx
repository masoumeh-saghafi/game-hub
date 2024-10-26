import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwich from './ColorModeSwich'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image src={logo} boxSize='60px'  objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwich />
    </HStack>
  )
}

export default NavBar
