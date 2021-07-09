import useSWR from 'swr';
import { Button, ButtonGroup, Heading, Stack, Text } from '@chakra-ui/react';
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HospitalCard = ({ city, hosp, prov, type }) => {
  const { address, bed_availability: bed, id, info, name, phone, queue } = hosp;

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
          <Text size="xs">{info}</Text>
        </Stack>
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
            <>
              <Text fontWeight="600">Tersedia : {bed}</Text>
              <Text fontSize="sm" fontWeight="500">
                {queue || 'Tanpa'} antrian
              </Text>
            </>
          )}
        </Stack>
      </Stack>
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
            href={`http://yankes.kemkes.go.id/app/siranap/tempat_tidur?kode_rs=${id}&jenis=${type}&propinsi=${prov}&kabkota=${city}`}
            rel="noreferrer"
            target="_blank"
            rightIcon={<FaArrowRight />}
            mt={[2, 0]}
          >
            Detail
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default HospitalCard;
