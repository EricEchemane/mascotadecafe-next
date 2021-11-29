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
  const {
    ShoppingCartContext,
    cartItems,
    totalPrice,
    isInTheCart,
    setCartItems,
    addToShoppingCart,
    removeFromShoppingCart,
    changeCartItemQuantity } = useShoppingCart();

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
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 800,
        lg: 1000,
        xl: 1200,
        xxl: 1536,
      },
    },
  });

  return <>
    <Head>
      <title> Mascota de Cafe </title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <ThemeProvider theme={MascotaTheme}>

      <ShoppingCartContext.Provider value={{
        cartItems, totalPrice, isInTheCart,
        setCartItems, addToShoppingCart,
        removeFromShoppingCart, changeCartItemQuantity
      }}>

        <ThemeContext.Provider value={{ theme, setTheme }}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ShoppingCartContext.Provider>
    </ThemeProvider>
  </>;
}

export default MyApp;
