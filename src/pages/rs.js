import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Button, Spinner, Stack } from '@chakra-ui/react';

import PageContainer from '@/components/PageContainer';
import HospitalCard from '@/components/HospitalCard';
import { FaArrowLeft } from 'react-icons/fa';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RumahSakit = () => {
  const router = useRouter();
  const { city, prov, type } = router.query;

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-hospitals?provinceid=${prov}&cityid=${city}&type=${type}`,
    fetcher
  );

  return (
    <PageContainer title="Daftar Rumah Sakit">
      <Button
        w="full"
        colorScheme="blue"
        leftIcon={<FaArrowLeft />}
        onClick={() => router.push('/')}
      >
        Kembali ke Pencarian
      </Button>
      <Stack w="full" spacing={4}>
        {data ? (
          data.hospitals.map((hosp) => (
            <HospitalCard
              key={hosp.id}
              hosp={hosp}
              city={city}
              prov={prov}
              type={type}
            />
          ))
        ) : (
          <Spinner
            mt={5}
            p={2}
            thickness="6px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.600"
            size="lg"
          />
        )}
      </Stack>
    </PageContainer>
  );
};

export default RumahSakit;
