import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function CartItemCard({ id, name, desc, price, quantity, imgSrc }) {

    const { changeCartItemQuantity, removeFromShoppingCart } = useContext(ShoppingCartContext);

    const XS = useMediaQuery('(max-width: 600px)');

    return <>
        <Box py={3} px={2} mb={2} key={id} className='darken-bg'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                    <Box display='flex' alignItems='center' gap='1rem'>
                        <Avatar
                            alt={name}
                            src={imgSrc}
                            sx={{ width: '4rem', height: '4rem' }} />
                        <Box>
                            <Typography mb={1}> {name} </Typography>
                            <Typography variant='caption'> {desc} </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
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
    </>;
}