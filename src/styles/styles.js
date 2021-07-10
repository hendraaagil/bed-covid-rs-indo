import { Global, css } from '@emotion/react';
import { useColorModeValue } from '@chakra-ui/react';

const GlobalStyle = ({ children }) => (
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
          background: ${useColorModeValue('#EDF2F7', '#1A202C')};
          transition: background 100ms linear;
        }
      `}
    />
    {children}
  </>
);

export default GlobalStyle;
