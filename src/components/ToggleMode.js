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
      m={3}
      bottom={0}
      rounded="md"
      zIndex="docked"
      sx={{
        bg:
          colorMode === 'light'
            ? 'rgba(237, 242, 247, 0.5)'
            : 'rgba(26, 32, 44, 0.5)',
        backdropFilter: 'blur(10px)',
      }}
    />
  );
};

export default ToggleMode;
