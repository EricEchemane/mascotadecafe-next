import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import Image from 'next/image';
import Link from 'next/link';

export default function Bests({ data }) {

    return <>
        <Box mt={8}>
            <Typography
                variant='h4'
                color='primary'
                sx={{ textAlign: 'center' }}>
                Our Bests
            </Typography>

            <Box p={2} pt={6} overflow='hidden' className='cont'>
                <Box
                    width='2500px'
                    id='slider-images'
                    display='grid'
                    gap='4rem'
                    gridTemplateColumns='repeat(8, 1fr)'
                    justifyContent='space-evenly'>
                    {
                        data.map(({ src, name, likes }) => (
                            <Paper
                                elevation={8}
                                key={src}
                                sx={{
                                    borderRadius: '.3rem',
                                    overflow: 'hidden',
                                    boxShadow: '0 24px 48px -12px rgba(0,0,0,.3)',
                                    mb: '2rem'
                                }}>

                                <Box display='flex' flexDirection='column'>
                                    <Box>
                                        <Image
                                            alt={name}
                                            src={`/assets/coffeePosters/${src}.jpg`}
                                            width={100}
                                            height={75}
                                            layout='responsive'
                                            priority={true}
                                        />
                                    </Box>
                                    <Typography sx={{ fontWeight: '500' }} pt={3} pl={2}> {name} </Typography>
                                    <Box p={2} display='flex' alignItems='center'>
                                        <FavoriteIcon fontSize='small' color='secondary' />
                                        <Typography color='secondary' ml={1} variant='subtitle1'> {likes} people like this </Typography>
                                    </Box>

                                </Box>
                            </Paper>
                        ))
                    }
                </Box>
            </Box>
            <Box textAlign='center' my={4}>
                <Link href='/#products' passHrefs>
                    <Button variant='contained' color='secondary'> Shop now </Button>
                </Link>
            </Box>
        </Box>
    </>;
}