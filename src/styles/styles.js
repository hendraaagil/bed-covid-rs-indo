import { Global, css } from '@emotion/react';
import { useColorMode } from '@chakra-ui/react';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          html {
            scoll-behavior: smooth;
            cursor: default;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? '#EDF2F7' : '#1A202C'};
            transition: background 100ms linear;
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
