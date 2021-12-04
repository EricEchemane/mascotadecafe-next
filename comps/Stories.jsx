import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

import Image from 'next/image';

export default function Stories({ stories }) {
    return <>
        <Box className='cont' px='1.5rem' pt={10} pb={4}>
            <Typography color='primary' variant='h4' textAlign='center'> Stories </Typography>
            {stories.map(({ id, name, title, branch, instagram, story, photoBy }) => (

                <Box key={id} my={8} sx={{ maxWidth: '800px' }} mx='auto'>
                    <Paper>
                        <Grid container>

                            <Grid item xs={12} md={5} p={3} sx={{ backdropFilter: 'invert(5%)' }}>
                                <Typography variant='h4' mb={3}> <strong>{title}</strong> </Typography>
                                <Typography variant='caption' component='div'> Photo by: {photoBy} </Typography>
                                <Typography variant='caption'> @{instagram} </Typography>
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Image
                                    src={`/assets/stories/${id}.jpg`}
                                    width={100}
                                    height={65}
                                    layout='responsive'
                                    alt={name} />
                            </Grid>

                            <Grid item xs={12} p={3} area-label='story owner'>
                                <Box display='flex' alignItems='center'>
                                    <Avatar alt={instagram} src={`/assets/profiles/${id}.jpg`} />
                                    <Box ml={1}>
                                        <Typography component='h6' variant='body1'> {name} </Typography>
                                        <Typography variant='caption'> @{instagram} </Typography>
                                    </Box>
                                </Box>
                                <Box mt={2}> {story} </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            ))}
        </Box>
    </>;
}