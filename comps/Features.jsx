import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Grid from '@mui/material/Grid';

export default function Features({ features }) {

    return <>
        <Typography variant='h4' sx={{ textAlign: 'center' }} pb={3} pt={8} color='primary'> What we have</Typography>
        <Grid container className='cont' justifyContent='center'>
            {
                features.map(({ title, desc, videoSrc }) => (
                    <Grid
                        item
                        key={title}
                        xs={12}
                        sm={6}
                        md={4}
                        p='1.5rem'>

                        <video style={{ width: '100%', borderRadius: '.5rem .5rem 0 0' }} src={videoSrc} muted autoPlay loop></video>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography sx={{ fontWeight: '500' }}> {title} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='subtitle1'> {desc} </Typography>
                                <Typography sx={{ cursor: 'pointer' }} variant='subtitle2' mt={2} color='primary.link'>
                                    Learn more
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>
                ))
            }
        </Grid>
    </>;
}