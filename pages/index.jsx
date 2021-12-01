import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../comps/Navbar';
import isDevMode from '../lib/node_env';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CoffeeProductCard from '../comps/CoffeeProductCard';

import Footer from '../comps/Footer';

import { useRouter } from 'next/router';

export default function Home({ coffees }) {

  const belowSmallDevices = useMediaQuery('(max-width: 950px)');
  const MD = useMediaQuery('(max-width: 800px)');
  const XS = useMediaQuery('(max-width: 600px)');

  const router = useRouter();

  function handleChange(event, route) {
    router.push(route, route, { scroll: false });
  };

  return <>
    <Navbar />
    <Box className="darken-bg" mb="2rem" pt={8}>

      <Grid container className='cont' p="1.5rem">

        <Grid item xs={12} md={5}>
          <Typography
            className='md-center'
            mt="1rem"
            variant={belowSmallDevices ? 'h4' : 'h3'}>
            Let&apos;s share
          </Typography>
          <Typography
            className='md-center'
            variant={belowSmallDevices ? 'h4' : 'h3'}
            color='primary'
            mb={4}>
            Experiences <br /> Together
          </Typography>
          <Box mb="1rem">
            <Typography variant='body2' className='md-center'>
              Photo {MD ? 'below' : 'on the right'}: <br />
              Scene from Filinvest City Branch <br />
              March 29, 2021 | Sunday | 2:00 PM
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Image
            src='/assets/stories/s4.jpg'
            alt="Table with coffee and pastries"
            width={100}
            height={70}
            layout="responsive"
            priority={true}
            className='rounded'
          />
        </Grid>
      </Grid>
    </Box>

    <Box p={XS ? '.5rem' : '1.5rem'} className='cont' id='products'>

      <ToggleButtonGroup
        color="primary"
        value={router.pathname}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="/"> Coffee </ToggleButton>
        <ToggleButton value="/pastry"> Pastry </ToggleButton>
      </ToggleButtonGroup>

      <Box m={4}></Box>

      <Grid container spacing={MD ? 2 : (XS ? 1 : 7)}>
        {coffees.map(coffee => <CoffeeProductCard {...coffee} key={coffee.id} />)}
      </Grid>
    </Box>

    <Footer />
  </>;
}

export async function getStaticProps() {
  const origin = isDevMode() ? 'http://localhost:3000' : 'https://mascotadecafe.vercel.app';
  const coffeeRes = await fetch(`${origin}/data/coffee.json`);
  return {
    props: {
      coffees: await coffeeRes.json(),
    }
  };
}