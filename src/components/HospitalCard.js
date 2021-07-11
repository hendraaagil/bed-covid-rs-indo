import useSWR from 'swr';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HospitalCard = ({ hosp, type }) => {
  const {
    address,
    available_beds: beds,
    bed_availability: bed,
    id,
    info,
    name,
    phone,
    queue,
  } = hosp;
  const router = useRouter();
  const bgCard = useColorModeValue('gray.50', 'gray.700');

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-hospital-map?hospitalid=${id}`,
    fetcher
  );

  return (
    <Stack
      p={4}
      rounded="md"
      shadow="md"
      borderWidth={bed === 0 && '3px'}
      borderColor={bed === 0 && 'red.500'}
    >
      <Stack direction={['column', 'column', 'row']} justify="space-between">
        <Stack>
          <Heading as="h4" size="md">
            {name}
          </Heading>
          <Text fontWeight="500">{address}</Text>
          {+type === 1 && <Text fontSize="sm">{info}</Text>}
        </Stack>
        {+type === 1 && (
          <Stack
            py={2}
            px={3}
            align="center"
            justify="center"
            bg={bed === 0 && 'red.500'}
            rounded="md"
            shadow="inner"
          >
            {bed === 0 ? (
              <Text fontWeight="600">Penuh!</Text>
            ) : (
              <Stack textAlign="center">
                <Text fontWeight="600">Tersedia : {bed}</Text>
                <Text fontSize="sm" fontWeight="500">
                  {queue || 'Tanpa'} antrean
                </Text>
              </Stack>
            )}
          </Stack>
        )}
      </Stack>
      {beds && (
        <Stack direction={['column', 'column', 'row']} justify="space-between">
          {beds.map((be, index) => (
            <Box
              key={String(index)}
              p={3}
              textAlign="center"
              bg={bgCard}
              rounded="md"
              shadow="inner"
              borderWidth={be.available <= 0 && '2px'}
              borderColor={be.available <= 0 && 'red.500'}
            >
              <Text
                fontSize="2xl"
                fontWeight="600"
                color={be.available <= 0 && 'red.500'}
              >
                {be.available}
              </Text>
              <Text fontWeight="500">{be.bed_class}</Text>
              <Text fontWeight="500" fontSize="sm">
                {be.room_name}
              </Text>
              <Divider my={2} />
              <Text fontSize="xs">{be.info}</Text>
            </Box>
          ))}
        </Stack>
      )}
      <Stack
        direction={['column', 'column', 'row']}
        justify="space-between"
        pt={2}
      >
        <Button
          as="a"
          href={`tel:${phone}`}
          colorScheme="blue"
          leftIcon={<FaPhone />}
          isDisabled={!phone}
        >
          {phone || 'Tidak tersedia'}
        </Button>
        <ButtonGroup
          justifyContent="space-between"
          flexDirection={['column', 'row']}
          colorScheme="blue"
          variant="outline"
          spacing={[0, 2]}
        >
          <Button
            as="a"
            href={data?.data?.gmaps}
            rel="noreferrer"
            target="_blank"
            leftIcon={<FaMapMarkerAlt />}
          >
            Lokasi
          </Button>
          <Button
            as="a"
            onClick={() => router.push(`/rs-detail?id=${id}&type=${type}`)}
            rightIcon={<FaArrowRight />}
            mt={[2, 0]}
            cursor="pointer"
          >
            Detail
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default HospitalCard;
