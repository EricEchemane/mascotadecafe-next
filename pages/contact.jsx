import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import Head from 'next/head';

export default function Contact() {
    return <>
        <Head>
            <title> Contacts - Mascota de Cafe </title>
        </Head>

        <Navbar />

        <Box pt={12}>
            <Box className='cont' p='1.5rem'>
                <Typography color='primary' variant='h4' textAlign='center'> Get in Touch </Typography>

                <Grid container pt={4} spacing={4}>

                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{ p: 3 }} className='darken-bg'>
                            <Typography variant='h6' mb={3}> Message us </Typography>
                            <Box display='grid' gap='1rem'>
                                <TextField id="message-email" fullWidth label="Email" variant="standard" />
                                <TextField id="message" fullWidth label="Message" variant="standard" />
                                <Button variant='contained' fullWidth sx={{ color: 'white', mt: 4 }}> Send </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{ p: 3 }} className='darken-bg'>
                            <Typography variant='h6' mb={3}> Follow us on social sedia </Typography>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <InstagramIcon />
                                <Typography> @mascotadecafePH </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <FacebookIcon />
                                <Typography> /mascotadecafe </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <TwitterIcon />
                                <Typography> /mascotadecafe </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Paper sx={{ p: 3 }} className='darken-bg'>
                            <Typography variant='h6' mb={3}> Message lines </Typography>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <EmailOutlinedIcon />
                                <Typography> mascotadecafe@gmail.com </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <LocalPhoneOutlinedIcon />
                                <Typography> 951 - 45581 </Typography>
                            </Box>
                            <Box display='flex' alignItems='center' gap='.5rem' my={2}>
                                <PhoneAndroidOutlinedIcon />
                                <Typography> +63 939 422 8185</Typography>
                            </Box>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
        </Box>

        <Footer />
    </>;
}