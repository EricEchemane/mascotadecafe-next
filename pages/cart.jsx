import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Navbar from '../comps/Navbar';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


export default function Cart() {

    const {
        cartItems,
        totalPrice,
        changeCartItemQuantity,
        removeFromShoppingCart } = useContext(ShoppingCartContext);

    return <>
        <Navbar />
        <Box p='1.5rem' mt={8} className='cont'>
            <Typography variant='h5'> Cart Items </Typography>
            <Box mt={2}>
                {
                    cartItems.length == 0
                        ? <Box>
                            <Typography variant='h6'> Your Cart is empty </Typography>
                            <br />
                            <Link href='/' passHref>
                                <Button variant='contained'> Shop Now </Button>
                            </Link>
                        </Box>

                        : cartItems.map(({ id, name, desc, price, quantity }) => (
                            <Box key={id}>
                                <Typography variant='h6'> {name} </Typography>
                                <Typography variant='subtitle2'> Price: {price} </Typography>
                                <Typography variant='body1'>
                                    Quantity:
                                    <Button disabled={quantity === 1} onClick={() => changeCartItemQuantity(id, -1)}> - </Button>
                                    {quantity}
                                    <Button onClick={() => changeCartItemQuantity(id, 1)}> + </Button>
                                </Typography>
                                <Tooltip title="Remove from cart">
                                    <IconButton onClick={() => removeFromShoppingCart(id)}>
                                        <RemoveShoppingCartOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        ))}
            </Box>
        </Box>
        <Box p='1.5rem' className='cont'>
            <Typography variant='h4'> Total Price: {totalPrice} </Typography>
        </Box>
    </>;
}