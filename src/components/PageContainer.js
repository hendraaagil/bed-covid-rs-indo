import { Divider, Heading, useColorModeValue, VStack } from '@chakra-ui/react';

const PageContainer = ({ children, title }) => (
  <VStack
    justify="center"
    align="start"
    mx="auto"
    px={2}
    pt={6}
    pb={2}
    minH="100vh"
    maxW="container.md"
    bg={useColorModeValue('gray.100', 'gray.800')}
    transition="background 100ms linear"
  >
    <Heading as="h1" size="2xl" mb={6} textAlign="center">
      {title}
    </Heading>
    <Divider />
    {children}
  </VStack>
);

export default PageContainer;
