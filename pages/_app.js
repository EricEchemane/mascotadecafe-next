import '../styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import useThemeContext from '../context_hooks/ThemeContext';
import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import useShoppingCart from '../context_hooks/ShoppingCartContext';

function MyApp({ Component, pageProps }) {

  const { theme, setTheme, ThemeContext } = useThemeContext();
  const { ShoppingCartContext, cartItems, totalPrice } = useShoppingCart();

  const MascotaTheme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
    palette: {
      mode: theme,
      primary: {
        main: orange[800],
      },
      secondary: {
        main: red[500],
      },
    },
  });

  return <>
    <Head>
      <title> Mascota de Cafe </title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;500&family=Open+Sans&family=Poppins&display=swap" rel="stylesheet"></link>
    </Head>

    <ThemeProvider theme={MascotaTheme}>
      <ShoppingCartContext.Provider value={{ cartItems, totalPrice }}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  </>;
}

export default MyApp;
