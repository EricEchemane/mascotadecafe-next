import Navbar from '../comps/Navbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function About() {
    return <>
        <Navbar />
        <Box pt={12} pb={4} id='landing-div'>
            <Grid container className='cont' px='1.5rem'>
                <Grid item className='md-center' xs={12} md={6} mb={4}>
                    <Typography variant='h4'> Coffee and Pets </Typography>
                    <Typography variant='h4'> will bring you </Typography>
                    <Typography variant='h4' color='secondary' component='span'> Love </Typography>
                    <Typography variant='h4' component='span'> and </Typography>
                    <Typography variant='h4' color='primary' component='span'> Energy </Typography>
                    <Box py={4}>
                        <Typography>
                            Get a 10% discount on your first visit.
                        </Typography>
                        <Typography>
                            Join our growing community, it's free!
                        </Typography>
                    </Box>
                    <Button variant='contained' sx={{ color: 'white', marginRight: '1rem' }}> sign up </Button>
                    <Button variant='outlined'> login </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <video
                        id='about-page-video'
                        src="/assets/videos/landing-video2.mp4"
                        muted
                        loop
                        autoPlay ></video>
                </Grid>
            </Grid>
        </Box>
    </>;
}