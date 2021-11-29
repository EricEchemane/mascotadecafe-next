import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../context_hooks/ShoppingCartContext';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function CheckoutForm() {

    const [paymentMethod, setPaymentMethod] = useState(0);
    const { totalPrice } = useContext(ShoppingCartContext);

    function handlePaymentMethodChange(event, newValue) {
        setPaymentMethod(newValue);
    }

    return <>
        <Box className='darken-bg'>
            <Typography variant='h6' pt={2} sx={{ textAlign: 'center' }}> Checkout </Typography>
            <Tabs
                variant='fullWidth'
                textColor='inherit'
                indicatorColor='primary'
                value={paymentMethod}
                onChange={handlePaymentMethodChange} centered>
                <Tab icon={<CreditCardIcon />} iconPosition="start" label="Credit Card" />
                <Tab icon={<DeliveryDiningIcon />} iconPosition="start" label="COD" />
            </Tabs>
            {
                paymentMethod == 0
                    ?
                    <Box p={3} display='flex' flexDirection='column' gap='1.5rem'>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Name on the card"
                            variant="standard" />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Card number"
                            variant="standard" />

                        <Box mt={2}>
                            <Typography variant='caption'> Expiration Date </Typography>
                            <Box mt={2} display='flex' gap='1rem'>
                                <TextField
                                    id="standard-basic"
                                    label="Year"
                                    variant="standard" />
                                <TextField
                                    id="standard-basic"
                                    label="Month"
                                    variant="standard" />
                                <TextField
                                    id="standard-basic"
                                    label="Date"
                                    variant="standard" />
                            </Box>
                        </Box>
                    </Box>
                    :
                    <Box p={3} display='flex' flexDirection='column' gap='1.5rem'>
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Full name"
                            variant="standard" />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Complete Address"
                            variant="standard" />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Landmark or hint"
                            variant="standard" />
                        <TextField
                            fullWidth
                            id="standard-basic"
                            label="Contact Number"
                            variant="standard" />
                    </Box>
            }
            <Box p={3}>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography> Sub-total </Typography>
                    <Typography color='primary'> {totalPrice} </Typography>
                </Box>
                <Box mb={1} display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography> Standard Delivery </Typography>
                    <Typography color='primary'> 50 </Typography>
                </Box>
                <hr />
                <Box my={2} display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6'> Total </Typography>
                    <Typography color='secondary' variant='h6'> PHP {totalPrice + 50} </Typography>
                </Box>
                <Button variant='contained' color='secondary' fullWidth startIcon={<ShoppingCartCheckoutIcon />}> Checkout </Button>
            </Box>
        </Box>
    </>;
}