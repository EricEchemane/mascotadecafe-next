import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

import FounderCard from './FounderCard';

export default function TheOwners({ founders }) {

    return <>
        <Box pb={4} pt={12} id='founders'>
            <Box textAlign='center'>
                <Typography variant='h4' color='primary' mb={4}> The Founders </Typography>
                <Typography> <i> "Poeple do not buy goods and services. </i> </Typography>
                <Typography> <i> They buy Relations, Stories and Magic." </i> </Typography>

                <Box my={4}>
                    <Box sx={{ maxWidth: '800px', margin: 'auto' }}>
                        <Image
                            alt='founders image'
                            src='/assets/illutration/ownersLandingImage.png'
                            width={100}
                            height={50}
                            priority={true}
                            layout='responsive' />
                    </Box>
                </Box>

                <Typography variant='h5' color='secondary' mb={4}> <strong> Who are we? </strong> </Typography>
                <Typography> " During college, we met each other. </Typography>
                <Typography> With common interests, we enjoy being together. </Typography>
                <Typography> Regardless of our differences we had founded this coffee company. </Typography>
            </Box>

            <Box mt={8} p={2}>
                {founders.map((founder, index) => <FounderCard {...founder} index={index} key={founder.id} />)}
            </Box>
        </Box>
    </>;
}