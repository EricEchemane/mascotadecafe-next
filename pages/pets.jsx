import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../comps/Navbar';
import PetCard from '../comps/PetCard';
import Footer from '../comps/Footer';
import isDevMode from '../lib/node_env';

export default function Pets({ pets }) {

    const MD = useMediaQuery('(max-width: 800px)');

    return <>
        <Head>
            <title> Pets - Mascota de Cafe </title>
            <meta name='description' content='Meet new Friends and play with them.' />
        </Head>
        <Navbar />

        <Box pt={12} className='darken-bg'>
            <Grid container className='cont' px='1.5rem'>

                <Grid item xs={12} md={6} className='md-center' pr={2}>
                    <Typography variant='h4' component='span' color='primary'>Meet</Typography>
                    <Typography variant='h4' component='span'> new </Typography>
                    <Typography variant='h4' component='span' color='secondary'> Friends </Typography>
                    <Typography mb={5} variant='h4'> and play with them </Typography>

                    <Typography variant='subtitle2' component='div'> Play with our pets while having coffee. </Typography>
                    <Typography mb={4} variant='subtitle2' component='div'> You can adapt pets if you want to. </Typography>
                    <Button
                        sx={{ color: 'white', mb: MD ? 4 : 0 }}
                        variant='contained'>
                        Learn more
                    </Button>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Image
                        alt='playing with pet'
                        src='/assets/stories/s2.jpg'
                        width={100}
                        height={65}
                        layout='responsive' />
                </Grid>
            </Grid>
        </Box>

        <Box className='cont' p='1.5rem' pt={8}>
            <Typography variant='h6' mb={4}> Visit us and let&apos;s play! </Typography>

            <Grid container spacing={8}>
                {pets.map(pet => (
                    <PetCard {...pet} key={pet.name} />
                ))}
            </Grid>
        </Box>

        <Footer />
    </>;
}

export async function getStaticProps() {
    const origin = isDevMode() ? 'http://localhost:3000' : 'https://mascotadecafe.vercel.app';
    const res = await fetch(`${origin}/data/pets.json`);

    return { props: { pets: await res.json() } };
}