import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'

interface props {
  onSelectPlatform: (platform: Platform) => void
  selectPlatformId?: number
}

const PlatformSelector = ({ onSelectPlatform, selectPlatformId }: props) => {
  const { data, error } = usePlatforms()

  const selectedPlatform = usePlatform(selectPlatformId)
  
  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
