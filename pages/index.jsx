import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../comps/Navbar';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import isDevMode from '../lib/node_env';

export default function Home({ coffees }) {

  const {
    cartItems,
    totalPrice,
    setCartItems,
    addToShoppingCart,
    removeFromShoppingCart,
    changeCartItemQuantity } = useContext(ShoppingCartContext);

  return <>
    <Navbar />
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