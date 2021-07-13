import useSWR from 'swr';
import { useRouter } from 'next/router';
import {
  Accordion,
  Button,
  Heading,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaArrowLeft, FaPhone } from 'react-icons/fa';

import PageContainer from '@/components/PageContainer';
import BedCard from '@/components/BedCard';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RumahSakit = () => {
  const router = useRouter();
  const { id, type } = router.query;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-bed-detail?hospitalid=${id}&type=${type}`,
    fetcher
  );

  return (
    <PageContainer title="Detail Rumah Sakit">
      <Button
        w="full"
        colorScheme="blue"
        leftIcon={<FaArrowLeft />}
        onClick={() => router.back()}
      >
        Kembali ke Daftar
      </Button>
      {data ? (
        <Stack w="full" pt={2} spacing={3}>
          <Heading size="xl">{data.data.name}</Heading>
          <Text fontWeight="500">{data.data.address}</Text>
          <Button
            as="a"
            href={`tel:${data.data.phone}`}
            leftIcon={<FaPhone />}
            isDisabled={data.data.phone === 'hotline tidak tersedia'}
            w="fit-content"
          >
            {data.data.phone}
          </Button>
          <Accordion allowMultiple>
            <Stack w="full" pt={2} spacing={4}>
              {data.data.bedDetail.map((bed, index) => (
                <BedCard key={String(index)} detail={bed} />
              ))}
            </Stack>
          </Accordion>
        </Stack>
      ) : (
        <Spinner
          p={2}
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.600"
          size="lg"
        />
      )}
    </PageContainer>
  );
};

export default RumahSakit;
