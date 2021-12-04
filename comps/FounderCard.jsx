import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import InstagramIcon from '@mui/icons-material/Instagram';

import Image from 'next/image';

export default function FounderCard({ index, id, fullname, position, about, instagramAcc, instaName }) {

    const MD = useMediaQuery('(max-width: 800px)');

    return <>
        <Paper sx={{ maxWidth: '800px', mx: 'auto', my: '3rem', overflow: 'hidden' }}>
            <Grid container >
                <Grid item xs={12} md={5} order={index % 2 == 0 && !MD ? 0 : 1}>
                    <Image
                        alt={fullname}
                        src={`/assets/portraits/${id}.jpg`}
                        width={100}
                        height={120}
                        layout='responsive'
                    />
                </Grid>
                <Grid item xs={12} md={7} order={index % 2 == 0 && !MD ? 1 : 0} px={4} py={3}>
                    <Typography variant='h5'> <strong> {fullname} </strong> </Typography>
                    <Typography variant='subtitle2' mb={2}> {position} </Typography>
                    <Typography variant={MD ? 'body1' : 'caption'} > {about} </Typography>
                    <Typography variant='caption' mt={4} component='div' color='primary.link'>
                        <a target="_blank" rel='author noreferrer' href={instagramAcc} style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}> <InstagramIcon /> {instaName} </a>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    </>;
}