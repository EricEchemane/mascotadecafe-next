import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

export default function PetCard({ sex, name, type, breed, about }) {
    return <>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper>
                <Image
                    alt={name}
                    src={`/assets/pets/${name}.png`}
                    width={100}
                    height={100}
                    layout='responsive'
                />
                <Box p={2}>
                    <Typography variant='h6' mb={2}> {name} </Typography>
                    <Typography>
                        {sex} is {breed == 'Aspin' ? 'an' : 'a'} {breed}. {about}
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    </>;
}