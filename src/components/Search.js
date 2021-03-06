import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  Button,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Select,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Search = () => {
  const [prov, setProv] = useState('');
  const [city, setCity] = useState('');
  const [type, setType] = useState('1');
  const [cities, setCities] = useState([]);
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/get-provinces`,
    fetcher
  );

  const searchCitiesByProvince = async (provinceId) => {
    setLoad(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get-cities?provinceid=${provinceId}`
    );
    const resJson = await res.json();
    setLoad(false);
    setCities(resJson.cities);
  };

  useEffect(() => {
    searchCitiesByProvince(prov);
  }, [prov]);

  return (
    <>
      <Heading as="h3" size="lg" py={2}>
        Pilih Provinsi
      </Heading>
      <Select
        icon={data ? <BiChevronDown /> : <Spinner />}
        placeholder="Pilih Provinsi ..."
        value={prov}
        isDisabled={!data}
        onChange={(event) => setProv(event.target.value)}
      >
        {data?.provinces.map((province) => (
          <option key={province.id} value={province.id}>
            {province.name}
          </option>
        ))}
      </Select>
      <Heading as="h3" size="lg" py={2}>
        Pilih Kabupaten / Kota
      </Heading>
      <Select
        icon={load ? <Spinner /> : <BiChevronDown />}
        placeholder={
          !prov.length
            ? 'Silahkan Pilih Provinsi Terlebih Dahulu'
            : 'Pilih Kabupaten / Kota ...'
        }
        value={city}
        isDisabled={!prov.length || load}
        onChange={(event) => setCity(event.target.value)}
      >
        {cities.map((cit) => (
          <option key={cit.id} value={cit.id}>
            {cit.name}
          </option>
        ))}
      </Select>
      <RadioGroup onChange={setType} value={type}>
        <Stack direction={['column', 'column', 'row']} py={2}>
          <Text>Pilih Tempat Tidur : </Text>
          <Radio value="1">Covid 19</Radio>
          <Radio value="2">Non-Covid 19</Radio>
        </Stack>
      </RadioGroup>
      <Button
        w="full"
        colorScheme="blue"
        isDisabled={!prov.length || load}
        onClick={() =>
          router.push(`/rs?prov=${prov}&city=${city}&type=${type}`)
        }
      >
        Cari
      </Button>
    </>
  );
};

export default Search;
