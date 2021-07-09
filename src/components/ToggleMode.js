import { IconButton, useColorMode } from '@chakra-ui/react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Mode"
      icon={colorMode === 'light' ? <FaRegMoon /> : <FaRegSun />}
      onClick={toggleColorMode}
      pos="fixed"
      m={4}
      bottom={0}
      rounded="md"
      zIndex="docked"
      sx={{ backdropFilter: 'blur(10px)' }}
    />
  );
};

export default ToggleMode;
