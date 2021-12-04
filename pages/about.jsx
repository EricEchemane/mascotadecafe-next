import Navbar from '../comps/Navbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Bests from '../comps/Bests';
import Features from '../comps/Features';
import Footer from '../comps/Footer';

import isDevMode from '../lib/node_env';

export default function About({ bestProductsData, features, stories }) {

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
                        <Typography variant='caption'> Get a 10% discount on your first visit. </Typography>
                        <Typography variant='caption' component='p'>
                            Join our growing community, it&apos;s free!
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
        <Bests data={bestProductsData} />
        <Features features={features} />
        <Footer />
    </>;
}

export async function getStaticProps() {
    const origin = isDevMode() ? 'http://localhost:3000' : 'https://mascotadecafe.vercel.app';

    const bestProductsRes = await fetch(`${origin}/data/bests.json`);
    const featuresRes = await fetch(`${origin}/data/features.json`);
    const storiesRes = await fetch(`${origin}/data/stories.json`);

    const bestProducts = await bestProductsRes.json();
    const features = await featuresRes.json();
    const stories = await storiesRes.json();

    return {
        props: {
            bestProductsData: bestProducts,
            features: features,
            stories: stories
        }
    };
}