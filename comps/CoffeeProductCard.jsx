import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckIcon from '@mui/icons-material/Check';

import Image from 'next/image';

import { useContext } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';

export default function CoffeeProductCard({ id, name, desc, price, rating }) {

    const { isInTheCart, addToShoppingCart } = useContext(ShoppingCartContext);
    const imgSrc = `/assets/coffeeProducts/${id}.png`;

    function addToCart() {
        addToShoppingCart({ id: id, name: name, desc: desc, price: price[0], quantity: 1, imgSrc: imgSrc });
    }

    return <>
        <Grid item xs={6} md={4} lg={3}>
            <div className='coffee-product-card'>

                <Image
                    alt={name}
                    src={imgSrc}
                    width={100}
                    height={80}
                    priority={true}
                    layout='responsive'
                />

                <Accordion sx={{ boxShadow: 'none', backgroundColor: 'transparent' }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography> {name} </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="caption"> {desc} </Typography>
                    </AccordionDetails>
                </Accordion>

                <Box px={2}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                        <Typography color='secondary' variant='subtitle2' > PHP {price[0]} </Typography>
                        <Rating size='small' name="read-only" value={rating} readOnly />
                    </Box>
                    <Box py={2}>
                        {
                            isInTheCart(id)
                                ? <Chip
                                    label="Added"
                                    size='small'
                                    color='success'
                                    variant='outlined'
                                    icon={<CheckIcon />}
                                />
                                : <Button
                                    onClick={addToCart}
                                    size='small'
                                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                                    fullWidth
                                    endIcon={<AddShoppingCartIcon />}>
                                    Add to Cart
                                </Button>
                        }
                    </Box>
                </Box>

            </div>
        </Grid>
    </>;
}