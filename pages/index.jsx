import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../comps/Navbar';
import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import isDevMode from '../lib/node_env';

export default function Home({ coffees, pastries }) {

  const {
    cartItems,
    totalPrice,
    addToShoppingCart,
    setCartItems } = useContext(ShoppingCartContext);

  useEffect(() => {
    const hasItems = localStorage.getItem('mascota-shopping-cart');
    if (hasItems) setCartItems(JSON.parse(hasItems));
  }, []);

  return <>
    <Navbar />
  </>;
}

export async function getStaticProps(context) {
  const origin = isDevMode() ? 'http://localhost:3000' : 'https://mascotadecafe.vercel.app';
  const coffeeRes = await fetch(`${origin}/data/coffee.json`);
  const pastriesRes = await fetch(`${origin}/data/pastries.json`);

  return {
    props: {
      coffees: await coffeeRes.json(),
      pastries: await pastriesRes.json(),
    }
  };
}