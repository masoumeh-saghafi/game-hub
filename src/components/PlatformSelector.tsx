import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import useGameQueryStore from '../store'

const PlatformSelector = () => {
  const { data, error } = usePlatforms()
  const setSelecedtPlatformId = useGameQueryStore(s => s.setPlatformId)

  const selecedtPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selecedtPlatformId)

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            onClick={() => setSelecedtPlatformId(platform.id)}
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
