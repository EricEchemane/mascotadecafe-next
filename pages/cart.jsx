import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Navbar from '../comps/Navbar';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import CartItemCard from '../comps/CartItemCard';

export default function Cart() {

    const { cartItems, totalPrice } = useContext(ShoppingCartContext);

    const XS = useMediaQuery('(max-width: 600px)');

    return <>
        <Navbar />
        {
            cartItems.length > 0
                ?
                <Box p={XS ? '1rem' : '1.5rem'} pt={12} className='cont'>

                    <Typography variant='h6'> You have {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart </Typography>

                    <Grid container pt={2} spacing={2}>
                        <Grid item xs={12} md={8} >
                            {cartItems.map(item => <CartItemCard  {...item} key={item.id} />)}
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box className='darken-bg' p={2} >
                                <Typography variant='h6'> Checkout </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                :
                <Box p={XS ? '1rem' : '1.5rem'} pt={10} className='cont' textAlign='center'>
                    <Typography mb={2}> You have no more items in the cart </Typography>
                    <Link href='/' passHref>
                        <Button variant='contained' color='secondary'> Continue shopping </Button>
                    </Link>
                </Box>
        }
    </>;
}