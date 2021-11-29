import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Link from 'next/link';

export default function Footer() {
    return <>
        <Box className="darken-bg" mt={4}>
            <Box className='cont' p="2rem 1.5rem" >
                <Grid container>
                    <Grid item xs={6} md={4} lg={3} mb={2}>
                        <Box>
                            <Typography mb={2}> Mascota de Cafe </Typography>
                            <Box display='flex' flexDirection='column' gap='.5rem'>
                                <Typography variant='caption'>
                                    <Link href='/owners'> The Owners </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/contact'> Contact </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/terms-conditions'> Terms and Conditions </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3} mb={3}>
                        <Box>
                            <Typography mb={2}> Partners </Typography>
                            <Box display='flex' flexDirection='column' gap='.5rem'>
                                <Typography variant='caption'>
                                    <Link href='/owners#echemane'> Eric Echemane </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/owners#bautista'> Mark Alcel Bautista </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/owners#miranda'> Allaiza Miranda </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/owners#gonzales'> Toni Rose Gonzales </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/owners#libunao'> Sarah Jane Libunao </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3} mb={2}>
                        <Box>
                            <Typography mb={2}> Pages </Typography>
                            <Box display='flex' flexDirection='column' gap='.5rem'>
                                <Typography variant='caption'>
                                    <Link href='/'> Coffee Products </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/pastry'> Pastry Products </Link>
                                </Typography>
                                <Typography variant='caption'>
                                    <Link href='/pets'> Pet Adaption </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} lg={3} mb={2}>
                        <Box>
                            <Typography mb={2}> Media Sources </Typography>
                            <Box display='flex' flexDirection='column' gap='.5rem'>
                                <Typography variant='caption'>
                                    <a target="_blank" href='https://pexels.com' rel="noopener noreferrer"> Pexels </a>
                                </Typography>
                                <Typography variant='caption'>
                                    <a target="_blank" href='https://pinterest.com' rel="noopener noreferrer"> Pinterest </a>
                                </Typography>
                                <Typography variant='caption'>
                                    <a target="_blank" href='https://mui.com/components/material-icons/#main-content' rel="noopener noreferrer"> MUI Icons </a>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box textAlign='center' py={1} px={4}>
                <Typography variant='caption'>
                    2021 Copyright &copy; Mascota de Cafe Coffee Company. All Rights Reserved
                </Typography>
            </Box>
        </Box>
    </>;
}