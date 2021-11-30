import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Bests({ data }) {

    return <>
        <Box mt={8}>
            <Typography
                variant='h5'
                color='primary'
                sx={{ textAlign: 'center' }}>
                Our Bests
            </Typography>

            <Box p={2} display='flex' flexWrap='nowrap' overflow='hidden'>
                <Paper>  </Paper>
            </Box>
        </Box>
    </>;
}