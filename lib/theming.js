import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const MascotaTheme = createTheme({
    typography: {
        fontFamily: [
            '"Montserrat"',
        ].join(','),
    },
    palette: {
        primary: {
            main: orange[800],
        },
        secondary: {
            main: red[500],
        },
    },
});