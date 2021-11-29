import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import Navbar from '../comps/Navbar';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function Cart() {

    const {
        cartItems,
        totalPrice,
        changeCartItemQuantity,
        removeFromShoppingCart } = useContext(ShoppingCartContext);

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
                            {
                                cartItems.map(({ id, name, desc, price, quantity, imgSrc }) => (
                                    <Box p={2} mb={2} key={id} className='darken-bg'>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Box display='flex' alignItems='center' gap='1rem'>
                                                    <Avatar
                                                        alt={name}
                                                        src={imgSrc}
                                                        sx={{ width: '4rem', height: '4rem' }} />
                                                    <Box>
                                                        <Typography> {name} </Typography>
                                                        <Typography variant='caption'> {desc} </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Box display='flex' alignItems='center' gap='1rem' height='100%'>
                                                    <Typography color='secondary' mt={1}> PHP {price} </Typography>
                                                    <Box flex='1 1 auto'></Box>
                                                    <Box>
                                                        <IconButton disabled={quantity == 1} size='small' onClick={() => changeCartItemQuantity(id, -1)}>
                                                            <RemoveIcon fontSize='small' />
                                                        </IconButton>
                                                        <Typography px={1} component='span'> {quantity} </Typography>
                                                        <IconButton size='small' onClick={() => changeCartItemQuantity(id, 1)}>
                                                            <AddIcon fontSize='small' />
                                                        </IconButton>
                                                    </Box>
                                                    <IconButton size='small' onClick={() => removeFromShoppingCart(id)}>
                                                        <RemoveShoppingCartOutlinedIcon fontSize='small' />
                                                    </IconButton>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                ))
                            }
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box className='darken-bg' p={2} >
                                Checkout
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