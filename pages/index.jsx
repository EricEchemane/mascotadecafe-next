import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navbar from '../comps/Navbar';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import isDevMode from '../lib/node_env';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home({ coffees }) {

  const {
    cartItems,
    totalPrice,
    setCartItems,
    addToShoppingCart,
    removeFromShoppingCart,
    changeCartItemQuantity } = useContext(ShoppingCartContext);

  const belowSmallDevices = useMediaQuery('(max-width: 950px)');
  const MD = useMediaQuery('(max-width: 800px)');

  return <>
    <Navbar />
    <Box className="darken-bg">

      <Grid container className='cont' p="1.5rem">

        <Grid item xs={12} md={5}>
          <Typography
            className='md-center'
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
          <Box className='md-center' marginBottom="1rem">
            Photo {MD ? 'below' : 'on the right'}: <br />
            Scene from Filinvest City Branch <br />
            March 29, 2021 | Sunday | 2:00 PM
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <Image
            src='/assets/stories/s4.jpg'
            alt="Table with coffee and pastries"
            width={100}
            height={60}
            layout="responsive"
            priority
            className='rounded'
          />
        </Grid>
      </Grid>
    </Box>
  </>;
}

export async function getStaticProps(context) {
  const origin = isDevMode() ? 'http://localhost:3000' : 'https://mascotadecafe.vercel.app';
  const coffeeRes = await fetch(`${origin}/data/coffee.json`);
  return {
    props: {
      coffees: await coffeeRes.json(),
    }
  };
}