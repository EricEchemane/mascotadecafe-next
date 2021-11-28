import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Navbar from '../comps/Navbar';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import Link from 'next/link';

export default function Cart() {

    const { cartItems, totalPrice, changeCartItemQuantity } = useContext(ShoppingCartContext);

    return <>
        <Navbar />
        <Box p={2} mt={8}>
            <Typography variant='h4'> Cart Items </Typography>
            <Box mt={2}>
                {
                    cartItems.length == 0
                        ? <Box>
                            <Typography variant='h5'> Your Cart is empty </Typography>
                            <br />
                            <Link href='/' passHref>
                                <Button variant='contained'> Shop Now </Button>
                            </Link>
                        </Box>

                        : cartItems.map(({ id, name, desc, price, quantity }) => (
                            <Box key={id}>
                                <Typography variant='h5'> {name} </Typography>
                                <Typography variant='subtitle2'> Price: {price} </Typography>
                                <Typography variant='body1'>
                                    Quantity:
                                    <Button disabled={quantity === 1} onClick={() => changeCartItemQuantity(id, -1)}> - </Button>
                                    {quantity}
                                    <Button onClick={() => changeCartItemQuantity(id, 1)}> + </Button>
                                </Typography>
                            </Box>
                        ))}
            </Box>
        </Box>
        <Box p={2}>
            <Typography variant='h4'> Total Price: {totalPrice} </Typography>
        </Box>
    </>;
}