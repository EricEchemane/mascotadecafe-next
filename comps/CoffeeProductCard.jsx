import Grid from '@mui/material/Grid';

export default function CoffeeProductCard({ id, name, desc, price, rating }) {
    return <>
        <Grid item xs={6} md={4} lg={3}>
            {name}
        </Grid>
    </>;
}