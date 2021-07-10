import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const BedCard = ({ detail }) => {
  const { stats, time } = detail;
  const { bed_available: bed, bed_empty: empty, queue, title } = stats;

  return (
    <AccordionItem rounded="md" shadow="md" overflow="hidden">
      <AccordionButton
        justifyContent="space-between"
        p={4}
        rounded="md"
        overflow="hidden"
        _expanded={{ bg: useColorModeValue('gray.50', 'gray.700') }}
      >
        <Stack align="start" textAlign="left">
          <Heading as="h4" size="md">
            {title}
          </Heading>
          <Text>Diupdate pada{time}</Text>
        </Stack>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4} rounded="md">
        <Stack direction="row" justify="space-between" mt={2} px={[0, 6, 12]}>
          <Box p={3} textAlign="center" bg="green.500" rounded="md">
            <Text>Tempat Tidur</Text>
            <Text fontSize="xl" fontWeight="600">
              {bed}
            </Text>
          </Box>
          <Box p={3} textAlign="center" bg="blue.500" rounded="md">
            <Text>Kosong</Text>
            <Text fontSize="xl" fontWeight="600">
              {empty}
            </Text>
          </Box>
          <Box p={3} textAlign="center" bg="orange.500" rounded="md">
            <Text>Antrean</Text>
            <Text fontSize="xl" fontWeight="600">
              {queue}
            </Text>
          </Box>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default BedCard;
